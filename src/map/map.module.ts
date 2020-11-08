import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import {MapDomain} from './entities/map-domain.entity';

@Module({
  controllers: [MapController],
  providers: [MapService],
  imports :[TypeOrmModule.forFeature([MapDomain])]
})
export class MapModule {}
