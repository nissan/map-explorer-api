import { Controller, Get, Injectable, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
    constructor(private readonly mapService:MapService){}

    @Get()
    getMap(@Query() paginationQuery:PaginationQueryDto){
        return this.mapService.getMap(paginationQuery);
    }

}
