import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @MessagePattern('get_user_profile')
  async getUserProfile(data: { userId: string }) {
    const user = await this.usersRepository.findOne({
      where: { id: parseInt(data.userId) },
    });
    return user ? user : { error: 'User not found' };
  }
}
