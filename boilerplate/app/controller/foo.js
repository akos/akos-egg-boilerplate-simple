'use strict';

const Controller = require('egg').Controller;
const BaseController = require('../core/base_controller');

class FooController extends BaseController {

    async render1() {
        const ctx = this.ctx;
        console.log(ctx.request.fields)
        console.log(ctx.queries);
        ctx.body = 'Hello World';
    }

    async render2() {
        const ctx = this.ctx;
        const a = ctx.service.hello.getHello()
        ctx.setBodyContent(200, a)
    }

    async render3() {
        const ctx = this.ctx;
        const a = ctx.service.hello.getHello()
        ctx.body = a;
    }
}

module.exports = FooController;
