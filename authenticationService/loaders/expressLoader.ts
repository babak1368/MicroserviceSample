import express from "express";
import bodyParser from "body-parser";
import routes from "../routes";
import config from "../config";

export default async ({ app }: { app: express.Express }) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Content-Length, X-Auth-Token, Accept, Authorization"
    );
    next();
  });

  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.use("/public", express.static("public"));
  app.enable("trust proxy");
  app.use(require("method-override")());

  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    next(err);
  });

  app.use((err: any, req: any, res: any, next: any) => {
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
