import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationService } from './registration.service';
import { User } from './entity/user.entity';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User])],
  providers: [RegistrationService],
})
export class RegistrationModule {}
