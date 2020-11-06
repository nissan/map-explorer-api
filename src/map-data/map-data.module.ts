import { Module } from '@nestjs/common';
import { MapDataController } from './map-data.controller';
import { MapDataService } from './map-data.service';

@Module({
  controllers: [MapDataController],
  providers: [MapDataService]
})
export class MapDataModule {}
