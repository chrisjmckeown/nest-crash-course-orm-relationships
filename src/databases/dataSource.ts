import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { ENTITIES } from './entities';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [...ENTITIES], //  entities: ['dist/entity/**/*.ts'], // <-- E2E tests don't work this configuration //
  migrations: ['dist/databases/migrations/*.js'],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
