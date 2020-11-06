import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapDataModule } from './map-data/map-data.module';

@Module({
  imports: [MapDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
