import { Module } from '@nestjs/common';
import { SomethingModule } from './something/something.module';

@Module({
  imports: [SomethingModule],
})
export class AppModule {}
