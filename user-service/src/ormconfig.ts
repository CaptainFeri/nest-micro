import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_db_user',
  password: 'your_db_password',
  database: 'user_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Only for development
};

export default config;
