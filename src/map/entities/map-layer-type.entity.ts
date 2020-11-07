import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MapLayerType{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @IsString()
    name: string;
}