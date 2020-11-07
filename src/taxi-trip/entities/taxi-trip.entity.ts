import { IsNumber, IsPositive, IsDate, IsLongitude, IsLatitude, IsCurrency, IsString, IsBoolean } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //sql table ==='taxitrip"
export class TaxiTrip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    @IsPositive()
    vendorId: number;
    
    @Column()
    @IsDate()
    pickupDateTime: Date;
    
    @Column()
    @IsDate()
    dropoffDateTime:Date;
    
    @Column()
    @IsPositive()
    passengerCount: number;
    
    @Column({type: 'real'})
    @IsPositive()
    tripDistance: number;
    
    @Column({type: 'real'})
    @IsLongitude()
    pickupLongitude: number;
    
    @Column({type: 'real'})
    @IsLatitude()
    pickupLatitude:number;
    
    @Column({type: 'real'})
    @IsLongitude()
    dropoffLongitude: number;
    
    @Column({type: 'real'})
    @IsLatitude()
    dropoffLatitude: number;
    
    @Column()
    @IsNumber()
    paymentType:number;
    
    @Column({type: 'real'})
    @IsPositive()
    fareAmount:number;

    @Column({type: 'real'})
    @IsPositive()
    tipAmount:number;

    @Column({type: 'real'})
    @IsPositive()
    tollsAmount:number;

    @Column({type: 'real'})
    @IsPositive()
    improvementSurchargeAmount:number;

    @Column({type: 'real'})
    @IsPositive()
    totalAmount:number

    @Column({type: 'real'})
    @IsPositive()
    extra:number;

    @Column({type: 'real'})
    @IsPositive()
    mtaTax:number;

    @Column()
    @IsNumber()
    rateCodeId: number;
    
    @Column()
    @IsBoolean()
    storeAndForwardFlag:boolean;

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
