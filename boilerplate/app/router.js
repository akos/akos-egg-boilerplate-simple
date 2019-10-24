'use strict';
const fs = require('fs');
const Path = require('path');

module.exports = app => {
    const routerPath = Path.resolve(__dirname, app.config.router.path || "./router");
    const routerList = fs.readdirSync(routerPath);
    for(let i = 0; i < routerList.length; i++) {
        const routerFile = routerList[i];
        require(`${routerPath}/${routerFile}`)(app);
    }
};
