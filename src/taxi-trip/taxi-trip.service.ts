import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { match } from 'assert';
import { response } from 'express';
import { debugPort } from 'process';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateTaxiTripFromFileDto } from './dtos/create-taxi-trip-from-file.dto';
import { CreateTaxiTripDto } from './dtos/create-taxi-trip.dto';
import { UpdateTaxiTripDto } from './dtos/update-taxi-trip.dto';
import { TaxiTrip } from './entities/taxi-trip.entity';

@Injectable()
export class TaxiTripService {

    constructor(@InjectRepository(TaxiTrip) private readonly taxiTripRepository: Repository<TaxiTrip>){}

    async findAll(paginationQuery: PaginationQueryDto){
        const {limit=10, offset=0} = paginationQuery;
        return await this.taxiTripRepository.find({
            where: [{isDeleted:false}],
            skip: offset,
            take: limit
        });;
    }

    async findOne(id:number){
        const taxiTrip = await this.taxiTripRepository.findOne(id);
        if (!taxiTrip || taxiTrip.isDeleted) {
            throw new NotFoundException(`Taxi Trip #${id} not found or may have been deleted`);
        }
        return taxiTrip;
    }

    async findAllDeleted(paginationQuery:PaginationQueryDto){
        const {limit=10, offset=0} = paginationQuery;
        return await this.taxiTripRepository.find({ 
            where: [{isDeleted:true}],
            skip: offset,
            take: limit
        });;
    }

    async create(createTaxiTripDto:CreateTaxiTripDto){
        // Make sure we have not already stored this trip
        const matchTaxiTrip = await this.taxiTripRepository.findOne({
            where: [{
                pickupDateTime:createTaxiTripDto.pickupDateTime, 
                pickupLongitude: +(createTaxiTripDto.pickupLongitude),
                pickupLatitude: +(createTaxiTripDto.pickupLatitude),
                dropoffDateTime: createTaxiTripDto.dropoffDateTime,
                dropoffLongitude: +(createTaxiTripDto.dropoffLongitude),
                dropoffLatitude: +(createTaxiTripDto.dropoffLatitude),
                passengerCount: createTaxiTripDto.passengerCount,
                paymentType: createTaxiTripDto.paymentType,
                totalAmount: createTaxiTripDto.totalAmount,
                tripDistance: createTaxiTripDto.tripDistance
            }]
        });
        if (matchTaxiTrip) {
            throw new HttpException(`Failed to create new. Compare entries createTaxoTripDto: ${JSON.stringify(createTaxiTripDto)} to matching TaxiTrip entity: ${JSON.stringify(matchTaxiTrip)}`, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        else {
            // Log the trip to the data
            const taxiTrip = this.taxiTripRepository.create({
                ...createTaxiTripDto, 
                id:0, 
                dateCreated:new Date(), 
                dateLastUpdated:new Date(), 
                isDeleted:false
            });
            return await this.taxiTripRepository.save(taxiTrip);
        }
        // compose GeoJSON points from this
        // Store the geoJson ponts
        // console.log("-----");
        // console.log(`Pickup Date: ${createTaxiTripDto.pickupDateTime}`);
        // console.log(`Pickup Coordinates(Long,Lat): (${createTaxiTripDto.pickupLongitude},${createTaxiTripDto.pickupLatitude})`);
        // console.log(`Dropoff Date: ${createTaxiTripDto.dropoffDateTime}`);
        // console.log(`DropOff Coordinates(Long,Lat): (${createTaxiTripDto.dropoffLongitude},${createTaxiTripDto.dropoffLatitude})`);
        // console.log(`Trip Distance (miles): ${createTaxiTripDto.tripDistance}`)
        // console.log(`Passenger Count: ${createTaxiTripDto.passengerCount}`);
        // console.log(`Fare Amount: $${createTaxiTripDto.fareAmount}`);
        // console.log(`Tip: $${createTaxiTripDto.tipAmount}`);
        // console.log(`Tolls: $${createTaxiTripDto.tollsAmount}`);
        // console.log(`MTA Tax: ${createTaxiTripDto.mtaTax}`);
        // console.log(`Total: $${createTaxiTripDto.totalAmount}`);
        // console.log(`Payment method: ${createTaxiTripDto.paymentType}`);
        // console.log("----");
    }
    async createFromFileData(createTaxiTripFromFileDtos:CreateTaxiTripFromFileDto[]){
            createTaxiTripFromFileDtos.forEach(async (dto) => {
                    return await this.create({
                        vendorId:dto.VendorID,
                        pickupDateTime: dto.tpep_pickup_datetime,
                        dropoffDateTime: dto.tpep_dropoff_datetime,
                        passengerCount: +dto.passenger_count,
                        tripDistance: +dto.trip_distance,
                        pickupLongitude: +dto.pickup_longitude,
                        pickupLatitude: +dto.pickup_latitude,
                        rateCodeId: +dto.RateCodeID,
                        storeAndForwardFlag: (dto.store_and_fwd_flag==='Y')
                        ? true
                        : (dto.store_and_fwd_flag==='N')
                        ? false
                        : false,
                        dropoffLongitude: +dto.dropoff_longitude,
                        dropoffLatitude: +dto.dropoff_latitude,
                        paymentType: +dto.payment_type,
                        fareAmount: parseInt(dto.fare_amount),
                        extra: parseInt(dto.extra),
                        mtaTax: parseInt(dto.mta_tax),
                        tipAmount: parseInt(dto.tip_amount),
                        tollsAmount: parseInt(dto.tolls_amount),
                        improvementSurchargeAmount: parseInt(dto.improvement_surcharge),
                        totalAmount: parseInt(dto.total_amount)
                    });
            });           
        }

    async update(id:number, updateTaxiTripDto:UpdateTaxiTripDto){
        // Make sure we have not already stored this trip
        const matchTaxiTrip = await this.taxiTripRepository.findOne(id);
        if (!matchTaxiTrip || matchTaxiTrip.isDeleted) {
            throw new BadRequestException(`Matching taxi trip data not found or may be deleted. Cannot update.`);
        }
        else {
            return(`I can update the record ${id} `);
        }
        
    }

    remove(id:number){
        return `Will remove map data for id ${id} (soft delete)`;
    }
}
