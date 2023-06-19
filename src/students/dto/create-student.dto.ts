import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    age: string;

    @IsString()
    @IsNotEmpty()
    address: string;
}
