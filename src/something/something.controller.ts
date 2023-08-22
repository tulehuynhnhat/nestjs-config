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
