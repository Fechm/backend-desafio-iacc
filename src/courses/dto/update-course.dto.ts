import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateCourseDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    code: string;

    @IsNumber()
    @IsOptional()
    year: number;

    @IsNumber()
    @IsOptional()
    semester: number;

    @IsString()
    @IsOptional()
    campus: string;
}
