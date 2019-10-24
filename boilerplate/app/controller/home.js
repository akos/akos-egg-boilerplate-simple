'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async hello() {
        const ctx = this.ctx;
        // ctx.body = 'Hello World';
        ctx.setBodyContent(200, 'Hello World')
    }

    async page() {
        const ctx = this.ctx;
        await ctx.render('home.html', {
            user: {
                name: 'foobar',
            },
            title: 'akos-egg view example',
        });
    }
}

module.exports = HomeController;
