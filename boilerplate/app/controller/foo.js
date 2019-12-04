'use strict';

const BaseController = require('../core/base_controller');

class FooController extends BaseController {
    async render1() {
        const ctx = this.ctx;
        ctx.body = 'Hello World';
    }

    async render2() {
        const ctx = this.ctx;
        const a = ctx.service.hello.getHello();
        ctx.setBodyContent(200, a);
    }

    async render3() {
        const ctx = this.ctx;
        const a = ctx.service.hello.getHello();
        ctx.body = a;
    }
}

module.exports = FooController;
