import {IsBoolean, IsCurrency, IsDate, IsDateString, IsDecimal, IsIn, IsLatitude, IsLongitude, IsNumber, IsPositive, IsString, MaxLength, MinLength} from 'class-validator';
export class CreateTaxiTripDto {
    @IsNumber()
    @IsIn([1,2])
    @IsPositive()
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
    @IsNumber()
    @IsIn([1,2,3,4,5,6])
    readonly paymentType: number;
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
    @IsCurrency()
    readonly extra:number;
    @IsCurrency()
    readonly mtaTax:number;
    @IsNumber()
    @IsIn([1,2,3,4,5,6])
    readonly rateCodeId: number;
    @IsString()
    readonly storeAndForwardFlag:boolean;
}
