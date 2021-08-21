// eslint-disable-next-line node/no-unpublished-require
const supertest = require('supertest');
const request = supertest('http://localhost:3000/api');

test('Create New Invoice Test', function () {
  return request
    .post(`/product`, {
      /*Params*/
    })
    .expect(200)
    .then((res) => { });
});
