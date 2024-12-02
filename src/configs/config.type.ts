export type Config = {
  app: AppConfig;
  database: DatabaseConfig;
  redis: RedisConfig;
  aws: AwsConfig;
};

export type AppConfig = {
  port: number;
  host: string;
};
export type AwsConfig = {
  accessKey: string;
  secretKey: string;
};
export type RedisConfig = {
  host: string;
  port: number;
  password: string;
};
export type DatabaseConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  name: string;
};