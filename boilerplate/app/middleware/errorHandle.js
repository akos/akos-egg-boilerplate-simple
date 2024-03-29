'use strict';

module.exports = () => async function (ctx, next) {
    try {
        await next();
    } catch (err) {
        // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
        const status = err.status || 500;
        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        const error = err.message ? err.message : 'Internal Server Error';
        // 从 error 对象上读出各个属性，设置到响应中

        ctx.logger.error(`${ctx.reqId} ${err.message}`);
        ctx.setBodyContent(500, error);
        if (status === 422) {
            ctx.body.detail = err.errors;
        }
        ctx.status = status;
    }
};
