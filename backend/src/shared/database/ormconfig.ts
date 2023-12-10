import { DataSource } from 'typeorm';
import { Error } from '@shared/errors/entities/error';

const entitiesDir =
  process.env.NODE_ENV === 'dev'
    ? 'src/modules/**/entities/*.ts'
    : 'dist/modules/**/entities/*.js';

const subscribersDir =
  process.env.NODE_ENV === 'dev'
    ? 'src/modules/audit/subscribers/*.ts'
    : 'dist/modules/audit/subscribers/*.js';

const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DB,
  entities: [entitiesDir, Error],
  synchronize: true,
  subscribers: [subscribersDir],
});

export const initializeDataSource = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch(err => {
      console.error('Error during Data Source initialization:', err);
    });
};

export default AppDataSource;
