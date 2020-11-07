import { IsString } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { MapLayer } from "./map-layer.entity";

@Entity()
export class MapDomain {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    @IsString()
    name:string;
    @Column()
    @IsString()
    description:string;

    @JoinTable()
    @ManyToMany(
        type => MapLayer, 
        (mapLayer) => mapLayer.mapDomains,
        {
            cascade:true,
        }
        )
    layers:MapLayer[];
}
