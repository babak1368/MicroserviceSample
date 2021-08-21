// eslint-disable-next-line node/no-unpublished-require
const supertest = require('supertest');
const request = supertest('http://localhost:3000/api');

test('Get All Customers', function () {
  return request
    .get(`/customer`)
    .expect(200)
    .then((res) => { });
});

test('Create New Customer Test', function () {
  return request
    .post(`/customer`, { firsName: 'Armin', lastName: 'Etemadi' })
    .expect(200)
    .then((res) => { });
});

test('Edit Customer Test', function () {
  return request
    .patch(`/customer`, { firsName: 'Armin', lastName: 'Etemadi' })
    .expect(200)
    .then((res) => { });
});

test('Delete Customer', function () {
  return request
    .delete(`/customer`, { id: '1' })
    .expect(200)
    .then((res) => { });
});
