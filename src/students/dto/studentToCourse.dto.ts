import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
import { StudentEntity } from '../entities/student.entity';
import { CourseEntity } from 'src/courses/entities/course.entity';

export class StudentToCourseDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    student: StudentEntity;
    @ApiProperty()
    @IsOptional()
    @IsUUID()
    course: CourseEntity;
}