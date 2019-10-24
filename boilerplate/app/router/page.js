'use strict';

module.exports = app => {
    app.router.get('/', app.controller.home.page);
    app.router.get('/hello', app.controller.home.hello);
};