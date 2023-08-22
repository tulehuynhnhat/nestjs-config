import { Controller, Get } from '@nestjs/common';

@Controller('something')
export class SomethingController {
  @Get()
  getHello() {
    return 'hello';
  }
}
