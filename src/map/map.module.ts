import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import {MapDomain} from './entities/map-domain.entity';
import { MapLayer } from './entities/map-layer.entity';

@Module({
  controllers: [MapController],
  providers: [MapService],
  imports :[TypeOrmModule.forFeature([MapDomain, MapLayer])]
})
export class MapModule {}
