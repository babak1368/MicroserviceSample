import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10),
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,

  database: {
    host: "localhost",
    port: 1433,
    username: "YourOwnUserName",
    password: "YourOwnPssword",
    database: "Authentication",
    migrationsRun: false,

    synchronize: false,
    logging: false,
  },

  api: {
    prefix: "/api",
  },

  messageBroker: {
    url: "amqp://<yourUser>:<yourPassword>@localhost",
  },
};
