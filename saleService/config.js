
module.exports = {

   dataBase: {
      protocol: 'mongodb',
      server: 'localhost',
      port: '27017',
      dataBaseName: 'Product'
   },

   cloudDataBase: {
      protocol: 'mongodb+srv',
      userName: 'yourUser',
      password: 'yorPassword',
      server: 'yourServerAddress',
      port: '00000',
      dataBaseName: 'Sale'
   },
   api: {
      prefix: '/api',
   },

   port: 3000,

   expiration: {
      customer: 1, // minutes

   },

   messageBroker: {
      url: 'amqp://<userName>:<password>@localhost'
   },

   integrationParams: {
      deliveryGuaranteeCount: 3
   },

   jobs: {
      deleteExpiredDataRule: '* * * * *',
      produceExpiredCustomerMessageRule: '* * * * *'
   }

};