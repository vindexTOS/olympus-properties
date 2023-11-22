import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/JWT/jwt.stategy';
import { PicturesModule } from './pictures/pictures.module';

@Module({

  imports:[PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_TIME },
    }),
    PicturesModule,],
  controllers: [PropertyController],
  providers: [PropertyService,JwtStrategy],
})
export class PropertyModule {}
