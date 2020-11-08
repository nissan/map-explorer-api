import { IsNumber, IsOptional, IsPositive, Max, Min } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    @Max(200)
    limit: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    offset:number;
}
