import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, validFileFilter } from 'src/common/utils/file-utils';
import { CreateFileDto } from './dtos/create-file.dto';
import { FileService } from './file.service';
import { diskStorage } from 'multer';

@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) { }

    // Reference: https://gabrieltanner.org/blog/nestjs-file-uploading-using-multer
    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './files',
                filename: editFileName,
            }),
            fileFilter: validFileFilter,
        }),
    )
    async uploadedFile(@UploadedFile() file, @Body() createFileDto:CreateFileDto) {
        return this.fileService.createFile(file,createFileDto);
    }


    @Get(':file')
    downloadFile(@Param('file') file, @Res() res) {
        return res.sendFile(file, { root: './files' });
    }
}
