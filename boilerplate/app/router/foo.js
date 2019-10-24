'use strict';

module.exports = app => {
    app.router.get('/render1', app.controller.foo.render1);
    app.router.get('/render2', app.controller.foo.render2);
    app.router.get('/render3', app.controller.foo.render3);
};
