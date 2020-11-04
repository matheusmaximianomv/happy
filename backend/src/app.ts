import express from 'express';
import { resolve } from 'path';
import cors from 'cors';

import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.handleExceptionErrors();
  }

  middlewares(): void {
    this.server.use(express.json());
    this.server.use(
      '/uploads',
      express.static(resolve(__dirname, '..', 'uploads'))
    );
    this.server.use(cors());
  }

  routes(): void {
    this.server.use(routes);
  }

  handleExceptionErrors(): void {
    this.server.use(errorHandler);
  }
}

export default new App().server;
