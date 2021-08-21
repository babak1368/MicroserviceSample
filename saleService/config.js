module.exports = {
  dataBase: {
    protocol: 'mongodb',
    server: 'localhost',
    port: '27017',
    dataBaseName: 'Product',
  },

  cloudDataBase: {
    protocol: 'mongodb+srv',
    userName: 'babak',
    password: 'Pass1234',
    server: 'cluster0.ihomv.mongodb.net',
    port: '27017',
    dataBaseName: 'Sale',
  },

  api: {
    prefix: '/api',
  },

  port: 3000,

  expiration: {
    customer: 1, // minutes
  },

  messageBroker: {
    url: 'amqp://admin:Pass1234@localhost',
  },

  integrationParams: {
    deliveryGuaranteeCount: 3,
  },

  jobs: {
    deleteExpiredDataRule: '* * * * *',
    produceExpiredCustomerMessageRule: '* * * * *',
  },
};
