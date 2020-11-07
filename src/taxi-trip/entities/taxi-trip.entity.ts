import { IsNumber, IsPositive, IsDate, IsLongitude, IsLatitude, IsCurrency, IsString, IsBoolean } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //sql table ==='taxitrip"
export class TaxiTrip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    @IsPositive()
    vendorID: number;
    
    @Column()
    @IsDate()
    pickupDateTime: Date;
    
    @Column()
    @IsDate()
    dropoffDatetime:Date;
    
    @Column()
    @IsPositive()
    passengerCount: number;
    
    @Column()
    @IsPositive()
    tripDistance: number;
    
    @Column()
    @IsLongitude()
    pickupLongitude: number;
    
    @Column()
    @IsLatitude()
    pickupLatitude:number;
    
    @Column()
    @IsLongitude()
    dropoffLongitude: number;
    
    @Column()
    @IsLatitude()
    dropoffLatitude: number;
    
    @Column()
    @IsNumber()
    paymentType:number;
    
    @Column()
    @IsPositive()
    fareAmount:number;

    @Column()
    @IsPositive()
    tipAmount:number;

    @Column()
    @IsPositive()
    readonly tollsAmount:number;

    @Column()
    @IsPositive()
    readonly improvementSurchargeAmount:number;

    @Column()
    @IsPositive()
    readonly totalAmount:number

    @Column()
    @IsPositive()
    readonly extra:number;

    @Column()
    @IsPositive()
    readonly mta_tax:number;

    @Column()
    @IsNumber()
    readonly RateCodeID: number;
    @Column()
    @IsBoolean()
    readonly store_and_fwd_flag:boolean;

    @Column()
    @IsDate()
    dateCreated: Date;
    
    @Column()
    @IsDate()
    dateLastUpdated:Date;
    
    @Column()
    @IsBoolean()
    isDeleted:boolean; // inserted this so I could soft-remove data if desired e.g. national security sensitive trips

}
