import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API: testing  Single Repo for React and Nestjs';
  }
}
