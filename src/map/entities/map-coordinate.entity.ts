import { IsLatitude, IsLongitude } from "class-validator";
//referencing https://docs.fileformat.com/gis/geojson/#:~:text=%20GeoJSON%20File%20Format%20%201%20Coordinate.%20Coordinate,line%20strings%20are%20the%20two%20simplest...%20More%20
// and https://macwright.com/2015/03/23/geojson-second-bite.html
// to get some basic geo types going
export class MapCoordinate {
    @IsLongitude()
    longitude:number;
    @IsLatitude()
    latitude: number;
}

export class MapPosition extends MapCoordinate {
    elevation?:number;
}

export enum GeometryShape {
    point,
    curve,
    surface
}

export enum GeometryType{
    point,
    lineString,
    polygon
}

export class Point {
    type: GeometryType.point;
    coordinates: MapCoordinate;
}

export class MultiPoint {
    type: GeometryType.point;
    coordinates:MapCoordinate[]
}

export class LineString  {
    type: GeometryType.lineString;
    coordinates : MapCoordinate[];
}

export class MultiLineString {
    type: GeometryType.lineString;
    coordinates: MapCoordinate[][];
}

export enum LinearRingType{
    interior,
    exterior
}

export class LinearRing{
    type:LinearRingType;
    coordinates: MapCoordinate[];
}

export class Polygon {
    type: GeometryType.polygon;
    coordinates:LinearRing[]
}

export class MultiPolygon {
    type: GeometryType.polygon;
    coordinates: LinearRing[][]
}
