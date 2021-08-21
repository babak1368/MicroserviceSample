// eslint-disable-next-line node/no-unpublished-require
import supertest from 'supertest';
const request = supertest('http://localhost:4000/api');

test('Get All Customers', function () {
  return request
    .get(`/user`)
    .expect(200)
    .then((res: supertest.Response) => {});
});

// this test file is not complete yet. but will be completed ASAP. #BABAk
