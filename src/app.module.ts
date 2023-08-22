import { Module } from '@nestjs/common';
import { SomethingModule } from './something/something.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SomethingModule],
})
export class AppModule {}
