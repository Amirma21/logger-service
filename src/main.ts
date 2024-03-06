import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLoggerService(),
  });
  await app.listen(3200);
}
bootstrap();
