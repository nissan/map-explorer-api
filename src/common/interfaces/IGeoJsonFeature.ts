export interface IGeoJsonFeatureCollection {
    type: "FeatureCollection",
    features: IGeoJsonFeature[]
}

export interface IGeoJsonFeature{
    type: "Feature",
    properties: Record<string,string>[];
    geometry: Point|Position|Line//|Polygon

}

export class Point {
    type: "Point";
    longitude: number;
    latitude: number
}

export class Position extends Point {
    elevation? : number
}

export class Line {
    type: "Line"
    points: Point[];
}