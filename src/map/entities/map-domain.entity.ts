import { IsJSON, IsOptional, IsString } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    @IsOptional()
    // @IsJSON()
    layers:string;

}
