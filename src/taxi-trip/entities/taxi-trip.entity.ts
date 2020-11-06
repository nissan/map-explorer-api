import { IsNumber, IsPositive, IsDate, IsLongitude, IsLatitude, IsCurrency, IsString } from "class-validator";

export class TaxiTrip {
    /**
     * @packageDocumentation
     * The row identitfier
     */
    id: number;
    @IsNumber()
    @IsPositive()
    vendorID: number;
    @IsDate()
    pickupDateTime: Date;
    @IsDate()
    dropoffDatetime:Date;
    @IsPositive()
    passengerCount: number;
    @IsPositive()
    tripDistance: number;
    @IsLongitude()
    pickupLongitude: number;
    @IsLatitude()
    pickupLatitude:number;
    @IsLongitude()
    dropoffLongitude: number;
    @IsLatitude()
    dropoffLatitude: number;
    @IsNumber()
    paymentType:number;
    @IsCurrency()
    fareAmount:number;
    @IsCurrency()
    tipAmount:number;
    @IsCurrency()
    readonly tollsAmount:number;
    @IsCurrency()
    readonly improvementSurchargeAmount:number;
    @IsCurrency()
    readonly totalAmount:number
    @IsNumber()
    readonly extra:number;
    @IsNumber()
    readonly mta_tax:number;
    @IsNumber()
    readonly RateCodeID: number;
    @IsString()
    readonly store_and_fwd_flag:string;
    dateCreated: Date;
    dateLastUpdated:Date;
    isDeleted:boolean; // inserted this so I could soft-remove data if desired e.g. national security sensitive trips

}
