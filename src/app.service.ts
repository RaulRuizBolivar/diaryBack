import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): string[] {
    return ['1', '2'];
  }

  getHello(): string {
    return 'Hello World!';
  }
}
