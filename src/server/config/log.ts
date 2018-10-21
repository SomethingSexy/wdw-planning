import joi from 'joi';

const LOG_FILE = process.env.LOG_FILE;
const LOG_FILE_ERROR = process.env.LOG_FILE_ERROR;
let LOG_CONSOLE: string | undefined | boolean = process.env.LOG_CONSOLE;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const LOG_FORMAT = process.env.LOG_FORMAT || 'string';

LOG_CONSOLE = process.env.NODE_ENV !== 'production' && LOG_CONSOLE !== 'false'
  ? true
  : (LOG_CONSOLE || false);

const logSchema = joi.object({
  console: joi.boolean(),
  errorFile: joi.string(),
  file: joi.string(),
  format: joi.string(),
  level: joi.string().valid(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
});

const { error, value: envVars } = joi.validate(
  {
    console: LOG_CONSOLE,
    errorFile: LOG_FILE_ERROR,
    file: LOG_FILE,
    format: LOG_FORMAT,
    level: LOG_LEVEL
  },
  logSchema
);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

if (!envVars.file && !envVars.errorFile && !envVars.console) {
  throw new Error('At least one logger needs to be configured.');
}

export default {
  ...envVars
};
