const loaders = require("./loaders");
const express = require("express");
const config = require("./config");
const logger = require("./loaders/loggerLoader");
 
async function startService() {

  const app = express();
  await loaders(app);

  app.listen(config.port, () => {
    logger.info(`Server listening on port: ${config.port}`);
  }).on('error', (err) => {
    logger.error(err);
    process.exit(1);
  });

  process.on('uncaughtException', err => {
    logger.error('There was an uncaught error', err)
    process.exit(1)
  })
}

startService();