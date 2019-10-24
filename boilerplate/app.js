// app.js
"use strict";
require('module-alias/register');
const handleCustomCode = require('@/extension/handleCustomCode');
const loggerPromotion = require('@/extension/loggerPromotion');
const path = require('path');

class AppBootHook {
    constructor(app) {
        this.app = app;
     }

    configWillLoad() {
        // 此时 config 文件已经被读取并合并，但是还并未生效
        // 这是应用层修改配置的最后时机
        // 注意：此函数只支持同步调用

        // 例如：参数中的密码是加密的，在此处进行解密
        // this.app.config.mysql.password = decrypt(this.app.config.mysql.password);
        // 例如：插入一个中间件到框架的 coreMiddleware 之间
        /* const insertIndex = this.app.config.appMiddleware.indexOf('bodyParsePatch');
         * this.app.config.coreMiddleware.splice(insertIndex + 1, 0, 'limit');
         * const directory = path.join(this.app.config.baseDir, 'app/extension/test');
         * this.app.loader.loadController({directory});
        */
        loggerPromotion(this.app);
        handleCustomCode(this.app, { requestId: true });
    }

    async didLoad() {
        // 所有的配置已经加载完毕
        // 可以用来加载应用自定义的文件，启动自定义的服务
        // 例如：创建自定义应用的示例
    }

    //
    async willReady() {
        // 所有的插件都已启动完毕，但是应用整体还未 ready
        // 可以做一些数据初始化等操作，这些操作成功才会启动应用

        // 例如：从数据库加载数据到内存缓存
        // this.app.cacheData = await this.app.model.query(QUERY_CACHE_SQL);


        /* agent.js 使用举例*/

        // 定时任务方法runSchedule，执行schedule/force_refresh.js
        /* await this.app.runSchedule('force_refresh');
         * const { messenger } = this.app;
         * // 注册监听 refresh
         * messenger.on('refresh', by => {
         *     this.app.logger.info('start update by %s', by);
         *     // create an anonymous context to access service
         *      const ctx = this.app.createAnonymousContext();
         *     // a convenient way to excute with generator function
         *      // can replaced by `co`
         *      ctx.runInBackground(async () => {
         *         await ctx.service.source.update();
         *         this.app.lastUpdateBy = by;
         *      });
         *  });
        */
    }
    //
    async didReady() {
        // 应用已经启动完毕
        // const ctx = await this.app.createAnonymousContext();
        // await ctx.service.Biz.request();
    }
    //
     async serverDidReady() {
     /*     // http / https server 已启动，开始接受外部请求
     *      // 此时可以从 app.server 拿到 server 的实例
     * 
     *      this.app.server.on('timeout', socket => {
     *          // handle socket timeout
     *      });
    * */
    }
    
}

module.exports = AppBootHook;