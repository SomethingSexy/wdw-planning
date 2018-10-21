export interface IServerConfig {
  log: {
    console: string | boolean | undefined;
    errorFile: string | undefined;
    file: string | undefined;
    format: string | undefined;
    level: string;
  };
  name: string;
  port: string | number;
}
