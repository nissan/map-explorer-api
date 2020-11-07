import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dtos/create-file.dto';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService {
    constructor(@InjectRepository(FileEntity)
        private readonly fileRepository:Repository<FileEntity>
    ){}
    async createFile(file, createFileDto: CreateFileDto) {
        const newFileEntity: FileEntity = {
            id: 0,
            originalFileName: file.originalname,
            storedFileName: file.filename,
            isDeleted: false,
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
        }
        this.fileRepository.save(newFileEntity); //disable once moved fully to DB

        //await this.fileTypeRepository.save(newFileEntity);
        return newFileEntity;
    }
}
