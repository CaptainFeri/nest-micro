import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Transport,
  ClientProxyFactory,
  ClientProxy,
} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const registrationClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'registration_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  const authClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'auth_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  const userClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'user_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  const adminClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'admin_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // Example request to register a user
  // const registrationResponse = await registrationClient
  //   .send(
  //     { cmd: 'register_user' },
  //     { email: 'user@example.com', password: 'securePassword' },
  //   )
  //   .toPromise();
  // console.log(registrationResponse);

  // // Example request to login
  // const loginResponse = await authClient
  //   .send(
  //     { cmd: 'login' },
  //     { email: 'user@example.com', password: 'securePassword' },
  //   )
  //   .toPromise();
  // console.log(loginResponse);

  // // Example request to get user profile
  // const userProfileResponse = await userClient
  //   .send({ cmd: 'get_user_profile' }, { userId: '1' })
  //   .toPromise();
  // console.log(userProfileResponse);

  // // Example request to get admin dashboard
  // const adminDashboardResponse = await adminClient
  //   .send({ cmd: 'get_admin_dashboard' }, {})
  //   .toPromise();
  // console.log(adminDashboardResponse);
}
bootstrap();
