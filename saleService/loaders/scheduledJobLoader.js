const integrationOutboxRepository = require('../dataAccess/integrationOutboxRepository');
const customerProducer = require('../messageBroker/customerProducer');
const customerRepository = require('../dataAccess/customerRepository');
const schedule = require('node-schedule');
const config = require('../config');

module.exports = async () => {
  schedule.scheduleJob(config.jobs.deleteExpiredDataRule, async function () {
    try {
      let now = new Date();
      let targetItems = await integrationOutboxRepository.getByExpression({
        expireTime: { $lt: now },
        targetCollection: 'Customer',
        isDone: false,
      });
      targetItems.forEach(async (item) => {
        await customerRepository.deleteCustomerAndLogTheEvent(item);
      });
    } catch (error) {
      console.log(error);
    }
  });

  schedule.scheduleJob(
    config.jobs.produceExpiredCustomerMessageRule,
    async function () {
      try {
        let targetItems = await integrationOutboxRepository.getByExpression({
          deliveryAttempCount: {
            $lte: config.integrationParams.deliveryGuaranteeCount,
          },
          targetCollection: 'Customer',
          isDone: true,
        });
        targetItems.forEach(async (item) => {
          customerProducer.sendDeleteMessageAcrossTheNodes(item);
          await integrationOutboxRepository.update(
            { _id: item._id },
            { deliveryAttempCount: item.deliveryAttempCount + 1 }
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
};
