export interface IGeoJsonFeatureCollection {
    type: "FeatureCollection",
    features: IGeoJsonFeature[]
}

export interface IGeoJsonFeature{
    type: "Feature",
    properties: Record<string,string>[];
    geometry: Point|Position|LineString //|Polygon

}

export class Point {
    type: "Point";
    longitude: number;
    latitude: number
}

export class Position extends Point {
    elevation? : number
}

export class LineString {
    type: "Line"
    points: Point[];
}