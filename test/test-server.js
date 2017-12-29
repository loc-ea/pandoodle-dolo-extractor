const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js');

describe('API root endpoint /', () => {

  it('should return hello world', () => {
    return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Hello world');
      });
  });
});
