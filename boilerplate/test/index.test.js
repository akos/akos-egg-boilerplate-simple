'use strict';


const mm = require('egg-mock');

describe('example helloworld test', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should GET /render1 200', () => {
    return app.httpRequest()
      .get('/render1')
      .expect(200)
      .expect('Hello World');
  });

  it('should GET /render3', () => {
    return app.httpRequest()
      .get('/render3')
      .expect(200)
      .expect('Hello World');
  });
});
