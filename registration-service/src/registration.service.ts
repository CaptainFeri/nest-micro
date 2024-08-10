import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { MessagePattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @MessagePattern('register_user')
  async registerUser(data: { email: string; password: string }) {
    const hashedPassword = await this.hashPassword(data.password);
    const otp = this.generateOTP();

    const user = this.usersRepository.create({
      email: data.email,
      password: hashedPassword,
      otp,
    });

    await this.usersRepository.save(user);
    return { message: 'User registered successfully', otp };
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  private generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
