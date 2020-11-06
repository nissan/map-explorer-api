import {IsBoolean, IsCurrency, IsDate, IsDateString, IsDecimal, IsLatitude, IsLongitude, IsNumber, IsPositive, IsString, MaxLength, MinLength} from 'class-validator';
export class CreateTaxiTripDto {
    @IsNumber()
    readonly vendorId: number;
    @IsDate()
    readonly pickupDateTime: Date;
    @IsDate()
    readonly dropoffDateTime:Date;
    @IsPositive()
    readonly passengerCount: number;
    @IsPositive()
    readonly tripDistance: number;
    @IsLongitude()
    readonly pickupLongitude: number;
    @IsLatitude()
    readonly pickupLatitude:number;
    @IsLongitude()
    readonly dropoffLongitude: number;
    @IsLatitude()
    readonly dropoffLatitude: number;
    @IsCurrency()
    readonly fareAmount:number;
    @IsCurrency()
    readonly tipAmount:number;
    @IsCurrency()
    readonly tollsAmount:number;
    @IsCurrency()
    readonly improvementSurchargeAmount:number;
    @IsCurrency()
    readonly totalAmount:number
    @IsNumber()
    readonly extra:number;
    @IsNumber()
    readonly mtaTax:number;
    @IsNumber()
    readonly rateCodeId: number;
    @IsString()
    readonly storeAndForwardFlag:string;
}
