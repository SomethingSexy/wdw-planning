import joi from 'joi';
import { IServerConfig } from '../types';
import log from './log';

const PORT = process.env.PORT || '6001';
const NAME = process.env.NAME || 'WDW Planning';

const commonSchema = joi.object({
  name: joi.string(),
  port: joi.string().min(4).max(4)
});

const { error, value: envVars } = joi.validate(
  { name: NAME, port: PORT },
  commonSchema
);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config: IServerConfig = {
  ...envVars,
  log
};

export default config;
