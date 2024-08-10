import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { MessagePattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @MessagePattern('login')
  async login(data: { email: string; password: string }) {
    const user = await this.usersRepository.findOne({
      where: { email: data.email },
    });
    if (user && (await bcrypt.compare(data.password, user.password))) {
      const payload = { email: user.email, sub: user.id, roles: user.roles };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return { error: 'Invalid credentials' };
  }

  @MessagePattern('validate_token')
  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      return { error: 'Invalid token' };
    }
  }
}
