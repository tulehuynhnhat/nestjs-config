import { Module } from '@nestjs/common';
import { SomethingModule } from './something/something.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

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
