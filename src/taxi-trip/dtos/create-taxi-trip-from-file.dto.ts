import {IsBoolean, IsCurrency, IsDate, IsDateString, IsDecimal, IsLatitude, IsLongitude, IsNumber, IsPositive, IsString, MaxLength, MinLength} from 'class-validator';
export class CreateTaxiTripFromFileDto {
    @IsNumber()
    @IsPositive()
    readonly VendorID: number;
    @IsDate()
    readonly tpep_pickup_datetime: Date;
    @IsDate()
    readonly tpep_dropoff_datetime:Date;
    @IsPositive()
    readonly passenger_count: number;
    @IsPositive()
    readonly trip_distance: number;
    @IsLongitude()
    readonly pickup_longitude: number;
    @IsLatitude()
    readonly pickup_latitude:number;
    @IsLongitude()
    readonly dropoff_longitude: number;
    @IsLatitude()
    readonly dropoff_latitude: number;
    @IsNumber()
    readonly payment_type:number;
    @IsCurrency()
    readonly fare_amount:number;
    @IsCurrency()
    readonly tip_amount:number;
    @IsCurrency()
    readonly tolls_amount:number;
    @IsCurrency()
    readonly improvement_surcharge:number;
    @IsCurrency()
    readonly total_amount:number
    @IsNumber()
    readonly extra:number;
    @IsNumber()
    readonly mta_tax:number;
    @IsNumber()
    readonly RateCodeID: number;
    @IsString()
    readonly store_and_fwd_flag:string;
}
