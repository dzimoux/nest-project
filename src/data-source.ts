import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3000,
  username: 'postgres',
  password: 'postgres',
  database: 'nestProjectDB',
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  synchronize: true,
});
