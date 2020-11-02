require("dotenv").config();
import { config } from "./config";
import * as mongoose from "mongoose";
import * as express from "express";
import routes from "./routes";
const app = express();

const start = async () => {
  try {
    (mongoose as any).Promise = global.Promise;
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log("😮 Error Connecting to the DB");
  }

  app.listen(config.port);
  console.log(`🚀 Running the web server on http://localhost:${config.port}`);

  routes(app);
};

start();
