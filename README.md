# Situation 2 branch: Import ConfigModule in App module set Global and get env from Something service

```ts
//app.module
import { Module } from '@nestjs/common';
import { SomethingModule } from './something/something.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SomethingModule,
  ],
})
export class AppModule {}
```

```ts
//something.controller
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('something')
export class SomethingController {
  constructor(private configService: ConfigService) {}
  @Get()
  getEnv() {
    return this.configService.get<string>('ENV1');
  }
}
```
