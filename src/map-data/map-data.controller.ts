import { Controller } from '@nestjs/common';
import { MapDataService } from './map-data.service';

@Controller('map-data')
export class MapDataController {
    constructor(private mapDataService: MapDataService){}
}
