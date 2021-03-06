import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'aloneking',
  database: 'students',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
