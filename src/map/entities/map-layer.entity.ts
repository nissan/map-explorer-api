import { Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { MapFeature } from "./map-feature.entity";
import { MapLayerType } from "./map-layer-type.entity";
import {MapDomain} from "./map-domain.entity";

@Entity()
export class MapLayer {
    @PrimaryGeneratedColumn()
    id: number;
    type:MapLayerType;
    features: MapFeature[];

    @ManyToMany(
        type => MapDomain,
        (map) => map.layers
    )
    mapDomains: MapDomain[]
}
