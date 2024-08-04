import { AppController } from '@/app.controller';
import { AppService } from '@/app.service.js';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
