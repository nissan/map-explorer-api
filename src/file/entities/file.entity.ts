import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileEntity {
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
