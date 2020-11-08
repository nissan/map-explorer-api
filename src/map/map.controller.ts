import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateMapDto } from './dtos/create-map.dto';
import { UpdateMapDto } from './dtos/update-map.dto';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
    constructor(private readonly mapService:MapService){}
    @ApiExcludeEndpoint()
    @Get()
    findAll(@Query() paginationQuery:PaginationQueryDto){
        return this.mapService.findAll(paginationQuery);
    }

    @ApiExcludeEndpoint()
    @Get(":id")
    findOne(@Param("id") id:number){
        return this.mapService.findOne(id);
    }

    @ApiExcludeEndpoint()
    @Get('/sample')
    getSampleMap(){
        return this.mapService.findSample();
    }

    @ApiExcludeEndpoint()
    @Post()
    createMap(@Body() createMapDto:CreateMapDto){
        return this.mapService.create(createMapDto);
    }

    @ApiExcludeEndpoint()
    @Patch(":id")
    updateMap(@Param("id") id:number, @Body() updateMapDto:UpdateMapDto){
        return this.mapService.update(id, updateMapDto);
    }

    @ApiExcludeEndpoint()
    @Delete(":id")
    deleteMap(@Param('id') id) {
        return this.mapService.remove(id);
    }

}
