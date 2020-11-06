import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { CreateMapDataDto } from './dtos/create-map-data.dto';
import { UpdateMapDataDto } from './dtos/update-map-data.dto';
import { MapDataService } from './map-data.service';

@Controller('map-data')
export class MapDataController {
    constructor(private mapDataService: MapDataService){}

    @Get()
    findAll(){
        return "Finding All";
    }

    @Get('/deleted')
    findAllDeletedMapData() {
        return "Finds map data that may have been soft deleted"
    }

    @Get(":id")
    findByMapDataId(@Param("id") mapDataId:number){
        return "Finds a particular point in my map based on the mapDataId"
    }

    @Post()
    createMapData(@Body() createMapDataDto: CreateMapDataDto){
        return "Creates some new map data for insertion into map data database"
    }

    @Patch(':id')
    updateMapData(@Param("id") mapDataId:number, @Body() updateMapDataDto:UpdateMapDataDto){
        return "Will update an existing bit of map data in the map database"
    }

    @Delete(':id')
    deleteMapData(@Param('id') mapDataId){
        return "Will remove a map data entity (soft delete)"
    }


}
