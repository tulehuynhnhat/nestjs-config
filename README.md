# Situation 4: Custom configuration files

```env
//.env
ENV1=value_env1
ENV2=value_env2
PORT=3000
JWT_ACCESS_TOKEN_SECRET=access-token-secret
JWT_REFESH_TOKEN_SECRET=refesh-token-secret
```

```ts
//config/configuration
export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  jwt: {
    accessToken: process.env.JWT_ACCESS_TOKEN_SECRET,
    refreshToken: process.env.JWT_REFESH_TOKEN_SECRET,
  },
  env1: process.env.ENV1,
  env2: process.env.ENV2,
});
```

```ts
//app.module
import { Module } from '@nestjs/common';
import { SomethingModule } from './something/something.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SomethingModule,
  ],
})
export class AppModule {}
```

```ts
//main
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
```
