import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsNumber()
    @IsNotEmpty()
    semester: number;

    @IsString()
    @IsNotEmpty()
    campus: string;
}
