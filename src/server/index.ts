import { NestFactory } from '@nestjs/core';
import cluster from 'cluster';
import { cpus } from 'os';
import 'reflect-metadata';
import ApplicationModule from './app.module';
import config from './config/index';
import HttpExceptionFilter from './filters/http-exception.filters';
import LoggerInterceptor from './interceptors/logger.interceptor';
import logger, { NestLogger } from './log';

const numCPUs = cpus().length;

if (cluster.isMaster) {
  logger.info(`This machine has ${numCPUs} CPUs.`);
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('online', worker => {
    logger.info(`Worker ${worker.process.pid} is online`);
  });

  cluster.on('exit', (worker, code, signal) => {
    logger.warn(`Worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`);
    logger.info('Starting a new worker...');
    cluster.fork();
  });
} else {
  async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, {
      logger: new NestLogger(logger)
    });
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new LoggerInterceptor());
    await app.listen(config.port);
    const envLabel = process.env.NODE_ENV || 'development';
    logger.info(`Started server instance on port ${config.port} in ${envLabel} environment at ${new Date().toLocaleString()} (localtime).`); // tslint:disable-line
  }
  bootstrap();
}
