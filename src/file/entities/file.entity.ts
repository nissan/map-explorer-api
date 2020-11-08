import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    originalFileName: string;
    
    @Column()
    storedFileName: string;
    
    @Column()
    dateCreated: Date;
    
    @Column()
    dateLastUpdated: Date;
    
    @Column()
    isDeleted:boolean;
}
