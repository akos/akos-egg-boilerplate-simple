/* 自定义 Controller 基类
 * 按照类的方式编写 Controller，不仅可以让我们更好的对 Controller 层代码进行抽象（例如将一些统一的处理抽象成一些私有方法）
 * 还可以通过自定义 Controller 基类的方式封装应用中常用的方法。
 */
const { Controller } = require('egg');
class BaseController extends Controller {
    get user() {
        return this.ctx.session.user;
    }

    success(data) {
        this.ctx.body = {
            success: true,
            data,
        };
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}
module.exports = BaseController;
