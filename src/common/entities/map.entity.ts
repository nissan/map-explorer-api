import { IsLatitude, IsLongitude } from "class-validator";
//referencing https://docs.fileformat.com/gis/geojson/#:~:text=%20GeoJSON%20File%20Format%20%201%20Coordinate.%20Coordinate,line%20strings%20are%20the%20two%20simplest...%20More%20
// and https://macwright.com/2015/03/23/geojson-second-bite.html
// to get some basic geo types going

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

export class Geometry{
    id: number;
    shape: GeometryShape;
    type: GeometryType;
}

export class Coordinate extends Geometry {
    constructor(){
        super();
        this.shape = GeometryShape.point;
        this.type = GeometryType.point;
    }
    @IsLongitude()
    longitude:number;
    @IsLatitude()
    latitude: number;
}

export class Position extends Coordinate {
    constructor(){
        super();
    }
    elevation?:number;
}

export class Point extends Geometry {
    constructor(){
        super();
        this.shape = GeometryShape.point;
        this.type = GeometryType.point;
    }
    coordinates: Position
}

export class MultiPoint extends Geometry {
    private _points:Point[];
    public get points() : Point[] {
        return this._points;
    }

    constructor(points:Point[]){
        super();
        this.shape = GeometryShape.curve;
        this.type = GeometryType.point;
        this._points = points;
    }
}

export class LineString extends Geometry {
    constructor(points:Point[]){
        super();
        this.shape = GeometryShape.curve,
        this.type = GeometryType.lineString
    }
    coordinates : Position[];
}

export class MultiLineString extends Geometry{
    private _lines:LineString[];
    public get lines(): LineString[] {
        return this._lines;
    }
    constructor(lines:LineString[]){
        super();
        this.shape = GeometryShape.curve,
        this.type = GeometryType.lineString
    }
}

export enum LinearRingType{
    interior,
    exterior
}

export class LinearRing extends Geometry {
    constructor() {
        super();
        this.shape = GeometryShape.surface;
        this.type = GeometryType.polygon;
    }
    coordinates: Coordinate[];
}

export class Polygon {
    type: GeometryType.polygon;
    coordinates:LinearRing[]
}

export class MultiPolygon {
    type: GeometryType.polygon;
    coordinates: LinearRing[][]
}

export enum FeatureType{
    feature,
    featureCollection
}

export class Property{
    
}

export class Feature {
    type: FeatureType.feature;

}