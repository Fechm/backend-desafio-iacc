import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateStudentDto {
    @IsString()
    @IsOptional()
    firstname: string;

    @IsString()
    @IsOptional()
    lastname: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    age: string;

    @IsString()
    @IsOptional()
    address: string;
}
