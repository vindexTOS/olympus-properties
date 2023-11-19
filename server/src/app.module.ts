import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaaService } from './aaaa/aaaa.service';
import { AaaResolver } from './aaa/aaa.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AaaaService, AaaResolver],
})
export class AppModule {}
