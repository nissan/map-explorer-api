import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { debugPort } from 'process';
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

    create(createTaxiTripDto:CreateTaxiTripDto){
        console.log("-----");
        console.log(`Pickup Date: ${createTaxiTripDto.pickupDateTime}`);
        console.log(`Pickup Coordinates(Long,Lat): (${createTaxiTripDto.pickupLongitude},${createTaxiTripDto.pickupLatitude})`);
        console.log(`Dropoff Date: ${createTaxiTripDto.dropoffDateTime}`);
        console.log(`DropOff Coordinates(Long,Lat): (${createTaxiTripDto.dropoffLongitude},${createTaxiTripDto.dropoffLatitude})`);
        console.log(`Trip Distance (miles): ${createTaxiTripDto.tripDistance}`)
        console.log(`Passenger Count: ${createTaxiTripDto.passengerCount}`);
        console.log(`Fare Amount: $${createTaxiTripDto.fareAmount}`);
        console.log(`Tip: $${createTaxiTripDto.tipAmount}`);
        console.log(`Tolls: $${createTaxiTripDto.tollsAmount}`);
        console.log(`MTA Tax: ${createTaxiTripDto.mtaTax}`);
        console.log(`Total: $${createTaxiTripDto.totalAmount}`);
        console.log(`Payment method: ${createTaxiTripDto.paymentType}`);
        console.log("----");
        return "Creates some new map data for insertion into map data database";
    }
    createFromFileData(createTaxiTripFromFileDtos:CreateTaxiTripFromFileDto[]){
        const errors = [];
        createTaxiTripFromFileDtos.forEach(dto=>
            errors.push(this.create({
                vendorId:dto.VendorID,
                pickupDateTime: dto.tpep_pickup_datetime,
                dropoffDateTime: dto.tpep_dropoff_datetime,
                passengerCount: dto.passenger_count,
                tripDistance: dto.trip_distance,
                pickupLongitude: dto.pickup_longitude,
                pickupLatitude: dto.pickup_latitude,
                rateCodeId: dto.RateCodeID,
                storeAndForwardFlag: dto.store_and_fwd_flag,
                dropoffLongitude: dto.dropoff_longitude,
                dropoffLatitude: dto.dropoff_latitude,
                paymentType: dto.payment_type,
                fareAmount: dto.fare_amount,
                extra: dto.extra,
                mtaTax: dto.mta_tax,
                tipAmount: dto.tip_amount,
                tollsAmount: dto.tolls_amount,
                improvementSurchargeAmount: dto.improvement_surcharge,
                totalAmount: dto.total_amount

            })));
            return errors.length>0?new HttpException(errors,HttpStatus.CONFLICT):[];
        }

    update(id:number, updateTaxiTripDto:UpdateTaxiTripDto){
        return `Will update an existing bit of map data for id ${id} in the map database`;
    }

    remove(id:number){
        return `Will remove map data for id ${id} (soft delete)`;
    }
}
