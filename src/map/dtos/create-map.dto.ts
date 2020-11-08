import { IsJSON, IsOptional, IsString } from "class-validator";

export class CreateMapDto {
    @IsString()
    readonly name:string;
    @IsString()
    readonly description:string;
    //@IsJSON()
    @IsOptional()   
    readonly layers:string;
}
