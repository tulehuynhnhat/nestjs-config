import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IConfig } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<IConfig>);
  //                                Type here ^^^^^^^
  const port = configService.get<number>('port');
  await app.listen(port);
}
bootstrap();
