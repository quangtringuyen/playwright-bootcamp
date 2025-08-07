import rimraf from 'rimraf';
import dotenv from 'dotenv';
import logger from "./utils/logger";
require("dotenv").config();

async function globalSetup(): Promise<void> {
  rimraf.sync('./allure-results');
  if (process.env.test_env) {
    dotenv.config({ path: `.env.${process.env.test_env}` });
  }
  logger.info(`Intended test env is ${process.env.test_env}`);
}

export default globalSetup;