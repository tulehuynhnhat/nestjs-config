# Situation 1: Import ConfigModule in App and get env from Something service

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
//test.controller
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('something')
export class SomethingController {
  constructor(private configService: ConfigService) {}
  @Get()
  getHello() {
    return 'hello';
  }
}
```

Result: Failed
Explain: the Something controller can not read the env from .env when inject ConfigService because ConfigService have not import in Something module, in this situation only app module is accessable the ConfigService and get value of env from .env.
