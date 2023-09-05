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
