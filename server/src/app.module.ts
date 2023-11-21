import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PropertyModule } from './property/property.module';

@Module({
  controllers: [AppController],
  imports: [PrismaModule, PropertyModule],
})
export class AppModule {}
