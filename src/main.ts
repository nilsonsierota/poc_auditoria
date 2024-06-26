import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose', 'log'],
  });

  await app.listen(3333);

  console.log(`Application is running on ${await app.getUrl()}`);
}
bootstrap();
