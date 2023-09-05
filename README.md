# Situation 5: Use Config Service with interface as the type hint

```env
//.env
ENV1=value_env1
ENV2=value_env2
PORT=3000
JWT_ACCESS_TOKEN_SECRET=access-token-secret
JWT_REFESH_TOKEN_SECRET=refesh-token-secret
```

```ts
// main.ts
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
```

```ts
// something.ts
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from 'src/config/configuration';

@Controller('something')
export class SomethingController {
  constructor(private configService: ConfigService<IConfig>) {}
  //                                     Type here ^^^^^^^
  @Get()
  getENV() {
    const env1 = this.configService.get<string>('env1');
    const env2 = this.configService.get<string>('env2');
    const port = this.configService.get<number>('port');
    const jwtAccessToken = this.configService.get<string>('jwtAccessToken');
    const jwtRefreshToken = this.configService.get<string>('jwtRefreshToken');

    return {
      env1,
      env2,
      port,
      jwtAccessToken,
      jwtRefreshToken,
    };
  }
}
```

When add IConfig interface as hint type you can see it by ctrl + space when get a env
