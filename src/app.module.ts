import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BusinessModule } from './modules/business/business.module';

@Module({
  imports: [PrismaModule, BusinessModule, AuthModule],
  controllers: [AppController],
  providers: [
  ],
})
export class AppModule {}