const Service = require('egg').Service;

class Hello extends Service {
    getHello() {
        return "Hello World";
    }
}
module.exports = Hello;