import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const entitiesDir =
  process.env.NODE_ENV === 'dev'
    ? 'src/modules/**/entities/*.ts'
    : 'dist/modules/**/entities/*.js';

    
const options: DataSourceOptions & SeederOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: "postgres",
  password: "postgres",
  database: process.env.POSTGRES_DB,
  entities: [entitiesDir],
  synchronize: true,
  seeds: ["src/modules/**/seeders/*.ts"],
}

const AppDataSource = new DataSource(options);

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
