import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import { loadEnv } from './config/envs';

loadEnv();

import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import router from "./routers/index";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use(router)
  .use(handleApplicationErrors);

export function init() {
  return Promise.resolve(app);
}

export default app;
