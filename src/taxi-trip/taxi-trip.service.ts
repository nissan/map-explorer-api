import { Injectable } from '@nestjs/common';
import { CreateTaxiTripFromFileDto } from './dtos/create-taxi-trip-from-file.dto';
import { CreateTaxiTripDto } from './dtos/create-taxi-trip.dto';
import { UpdateTaxiTripDto } from './dtos/update-taxi-trip.dto';

@Injectable()
export class TaxiTripService {
    findAll(limit:number=20, offset:number=0){
        return `Finding All. Limit: ${limit}, Offset:${offset}`;
    }

    findOne(id:number){
        return `Finds a particular point in my map with TaxiTripId: ${id}`;
    }

    findAllDeleted(limit:number, offset:number){
        return `Finding All Deleted. Limit: ${limit}, Offset:${offset}`;
    }

    create(createTaxiTripDtos:CreateTaxiTripDto[]){
        console.log(createTaxiTripDtos[0].pickupDateTime)
        return createTaxiTripDtos;
        return "Creates some new map data for insertion into map data database";
    }
    createFromFileData(createTaxiTripFromFileDtos:CreateTaxiTripFromFileDto[]){
        console.log(createTaxiTripFromFileDtos[0].tpep_pickup_datetime)
        return createTaxiTripFromFileDtos;

    }

    update(id:number, updateTaxiTripDto:UpdateTaxiTripDto){
        return `Will update an existing bit of map data for id ${id} in the map database`;
    }

    remove(id:number){
        return `Will remove map data for id ${id} (soft delete)`;
    }
}
