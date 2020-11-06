export class TaxiTrip {
    /**
     * @packageDocumentation
     * The row identitfier
     */
    id: number;
    vendorId: number;
    pickupDateTime: Date;
    dropoffDateTime:Date;
    passengerCount: number;
    tripDistance: number;
    pickupLongitude: number;
    pickupLatitude:number;
    dropoffLongitude: number;
    dropoffLatitude: number;
    fareAmount:number;
    tipAmount:number;
    tollsAmount:number;
    improvementSurchargeAmount:number;
    totalAmount:number
    extra:number;
    mtaTax:number;
    rateCodeId: number;
    storeAndForwardFlag:boolean;
    dateCreated: Date;
    dateLastUpdated:Date;
    isDeleted:boolean; // inserted this so I could soft-remove data if desired e.g. national security sensitive trips

}
