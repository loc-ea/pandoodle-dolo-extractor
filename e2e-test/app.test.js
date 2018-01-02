const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js');

describe('API root endpoint /', () => {

  it('should return list of 5 keywords when post', () => {
    return chai.request(app)
      .post('/')
      .send({text: '북한 조선중앙방송은 1일 오전 일기예보를 전하며 “겨울철에는 인체의 체온 조절을 위한 열 에네르기(에너지) 소모가 많아지므로 사람들 속에서 식사 섭생에 주의를 돌려야 할 것”이라면서 “특히 알코올 음료를 지나치게 많이 마시거나 술(소주)과 맥주를 섞어 마시면 체온 조절에서 중요한 역할을 하는 심장, 간 등에 나쁜 영향을 줄 수 있다”고 전했다. 그러면서 “술은 주로 저녁경에 알코올양으로 80㎖를 초과하지 않도록 하며 술과 맥주는 따로 마시는 것이 좋다”고 덧붙였다.'})
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.same.members(['마시', '맥주', '알코올', '조절', '체온']);
      });
  });
});
