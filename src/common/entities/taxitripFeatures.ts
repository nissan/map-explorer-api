export class lineStringGeometry {
    type: "LineString";
    coordinates: Record<number,number>[];
}

export class taxiTripProperties {
    rowId: number;
    pickupDateTime: Date;
    dropOffDateTime: Date;
    passengerCount: number;
    tripDistance: number;
    paymentType:number;
    fareAmount:number;
    tipAmount:number;
    tollsAmount:number;
    improvementSurchargeAmount:number;
    totalAmount:number;
    extra:number;
    mtaTax:number;
    rateCodeId:number;
}
export class lineStringTaxiTripFeature {
    type: "Feature";
    geometry: lineStringGeometry;
    properties: taxiTripProperties;
}

export class lineStringTaxiTripFeatureCollection {
    type: "FeatureCollection";
    features: lineStringTaxiTripFeature[];
}