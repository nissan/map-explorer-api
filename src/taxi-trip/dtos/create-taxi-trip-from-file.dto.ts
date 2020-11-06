import {IsBoolean, IsCurrency, IsDate, IsDateString, IsDecimal, IsIn, IsLatitude, IsLongitude, IsNumber, IsNumberString, IsPositive, IsString, MaxLength, MinLength} from 'class-validator';

// Data type validations based on data dictionary at https://www1.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf
export class CreateTaxiTripFromFileDto {
    @IsNumber()
    @IsIn([1,2])
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
    @IsIn([1,2,3,4,5,6])
    readonly payment_type:number;
    @IsCurrency()
    readonly fare_amount:string;
    @IsCurrency()
    readonly tip_amount:string;
    @IsCurrency()
    readonly tolls_amount:string;
    @IsNumberString()
    readonly improvement_surcharge:string;
    @IsCurrency()
    readonly total_amount:string
    @IsCurrency()
    readonly extra:string;
    @IsNumberString()
    readonly mta_tax:string;
    @IsNumber()
    @IsIn([1,2,3,4,5,6])
    readonly RateCodeID: number;
    @IsString()
    @IsIn(["Y","N"])
    readonly store_and_fwd_flag:string;
}
