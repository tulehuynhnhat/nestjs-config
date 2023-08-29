# Situation 3 branch: Get env from main

```env
//.env
ENV1=value_env1
ENV2=value_env2
PORT=3000
```

```ts
//app.module
import { Module } from '@nestjs/common';
import { SomethingModule } from './something/something.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), SomethingModule],
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
  const port = configService.get<string>('PORT');
  console.log(port);
  await app.listen(port);
}
bootstrap();
```
