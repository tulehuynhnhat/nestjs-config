import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  await app.listen(port);
  console.log(configService.get('port'));
  console.log(configService.get('jwt.accessToken')); // or configService.get('JWT_ACCESS_TOKEN_SECRET')
  console.log(configService.get('jwt.refreshToken')); // or configService.get('JWT_REFESH_TOKEN_SECRET')
  console.log(configService.get('env1'));
  console.log(configService.get('env2'));
}
bootstrap();
