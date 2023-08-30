import { Module } from '@nestjs/common';
import { SomethingController } from './something.controller';

@Module({
  controllers: [SomethingController],
})
export class SomethingModule {}
