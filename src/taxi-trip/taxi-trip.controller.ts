import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateTaxiTripFromFileDto } from './dtos/create-taxi-trip-from-file.dto';
import { CreateTaxiTripDto } from './dtos/create-taxi-trip.dto';
import { UpdateTaxiTripDto } from './dtos/update-taxi-trip.dto';
import { TaxiTripService } from './taxi-trip.service';

@Controller('taxi-trip')
export class TaxiTripController {
    constructor(private TaxiTripService: TaxiTripService){}

    @ApiExcludeEndpoint()
    @Get()
    findAll(@Query() paginationQuery?:PaginationQueryDto){
        return this.TaxiTripService.findAll(paginationQuery);
        
    }
    @Get("/geojson")
    findAllGeoJson(@Query() paginationQuery?:PaginationQueryDto){
        return this.TaxiTripService.findAllGeoJson(paginationQuery);
    }

    @ApiExcludeEndpoint()
    @Get('/deleted')
    findAllDeletedTaxiTrip(@Query() paginationQuery?:PaginationQueryDto) {
        return this.TaxiTripService.findAllDeleted(paginationQuery);
    }

    @Get(":id")
    findByTaxiTripId(@Param("id") TaxiTripId:number){
        return this.TaxiTripService.findOne(TaxiTripId);
    }

    @Post("/bulkUpload")
    createTaxiTrips(@Body() createTaxiTripFromFileDtos: CreateTaxiTripFromFileDto[]){
        return this.TaxiTripService.createFromFileData(createTaxiTripFromFileDtos);
    }

    @Post()
    createTaxiTrip(@Body() createTaxiTripFromFileDto: CreateTaxiTripFromFileDto){
        return this.TaxiTripService.createFromFileData([createTaxiTripFromFileDto]);
    }

    @Patch(':id')
    updateTaxiTrip(@Param("id") TaxiTripId:number, @Body() updateTaxiTripDto:UpdateTaxiTripDto){
        return this.TaxiTripService.update(TaxiTripId, updateTaxiTripDto);
    }

    @Delete(':id')
    deleteTaxiTrip(@Param('id') TaxiTripId){
        return this.TaxiTripService.remove(TaxiTripId);
    }


}
