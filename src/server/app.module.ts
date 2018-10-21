import { Module } from '@nestjs/common';
// import logger from './log';
import RenderController from './modules/render.controller';

@Module({
  controllers: [
    RenderController,
  ],
  // providers: [{
  //   provide: 'Models',
  //   useFactory: async () => {
  //     const models = await createModels(
  //       {
  //         database: 'wdw',
  //         logging: false,
  //         pool: {
  //           max: 100 // TODO: only here because we are kicking off a shit ton of async inserts
  //         },
  //         username: 'tylercvetan',
  //       },
  //       logger
  //     );

  //     return models;
  //   },
  // }]
})

export default class ApplicationModule {}
