import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateMapDataDto } from './dtos/create-map-data.dto';
import { UpdateMapDataDto } from './dtos/update-map-data.dto';
import { MapDataService } from './map-data.service';

@Controller('map-data')
export class MapDataController {
    constructor(private mapDataService: MapDataService){}

    @Get()
    findAll(@Query() paginationQuery:PaginationQueryDto){
        const {limit, offset} = paginationQuery;
        return this.mapDataService.findAll(limit, offset);
        
    }

    @Get('/deleted')
    findAllDeletedMapData(@Query() paginationQuery:PaginationQueryDto) {
        const {limit, offset} = paginationQuery;
        return this.mapDataService.findAllDeleted(limit, offset);
    }

    @Get(":id")
    findByMapDataId(@Param("id") mapDataId:number){
        return this.mapDataService.findOne(mapDataId);
    }

    @Post()
    createMapData(@Body() createMapDataDto: CreateMapDataDto){
        this.mapDataService.create(createMapDataDto);
    }

    @Patch(':id')
    updateMapData(@Param("id") mapDataId:number, @Body() updateMapDataDto:UpdateMapDataDto){
        return this.mapDataService.update(mapDataId, updateMapDataDto);
    }

    @Delete(':id')
    deleteMapData(@Param('id') mapDataId){
        return this.mapDataService.remove(mapDataId);
    }


}
