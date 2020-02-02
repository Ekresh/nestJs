import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  const port = 3000;
  app.enableCors();
  await app.listen(port);
  logger.log(`App strarted successfully on port: ${port}`);
}
bootstrap();
