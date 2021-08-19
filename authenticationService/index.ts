import express from "express";
import "reflect-metadata";
import config from "./config";
import HooryLogger from "./loaders/loggerLoader";
import loader from './loaders';

async function startServer() {
  const app = express();

  await loader({ expressApp: app });

  app.listen(config.port, () => {
    HooryLogger.getInstance().info(`Server listening on port: ${config.port}`);
  }).on('error', (err: any) => {
    HooryLogger.getInstance().error(err);
    process.exit(1);
  });
}

startServer();


