module.exports = {
  dataBase: {
    protocol: 'mongodb',
    server: '000',
    port: '000',
    dataBaseName: 'Product',
  },

  cloudDataBase: {
    protocol: 'mongodb+srv',
    userName: '000',
    password: '000',
    server: '000',
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
    url: 'amqp://000:000@localhost',
  },

  integrationParams: {
    deliveryGuaranteeCount: 3,
  },

  jobs: {
    deleteExpiredDataRule: '* * * * *',
    produceExpiredCustomerMessageRule: '* * * * *',
  },
};
