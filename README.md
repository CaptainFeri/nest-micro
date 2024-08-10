# Microservices Architecture with NestJS, RabbitMQ, and TypeORM

This project demonstrates a microservices architecture using NestJS with RabbitMQ as the message broker and TypeORM for database interactions. The architecture consists of four microservices and a client application:

- Registration Service: Manages user registration and OTP generation.
- Auth Service: Handles user login and JWT authentication.
- User Service: Provides user profile data.
- Admin Service: Manages administrative functions and data.
- Client App: Acts as a gateway to interact with these services.

## Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)

## Setup

### Running with Docker Compose

1. Ensure Docker and Docker Compose are installed on your machine.

2. Navigate to the project root directory.

3. Build and start the containers:

   `bash
   docker-compose up --build
