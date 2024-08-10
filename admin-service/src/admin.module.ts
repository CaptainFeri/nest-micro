import { Module } from '@nestjs/common';
import { AdminService } from './admin.serivce';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Admin])],
  providers: [AdminService],
})
export class AdminModule {}
