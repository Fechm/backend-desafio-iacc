import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './services/students.service';
import { StudentsController } from './controllers/students.controller';
import { StudentEntity } from './entities/student.entity';
import { StudentsCoursesEntity } from './entities/studentsCourses.entity';
import { CourseEntity } from '../courses/entities/course.entity';
@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, StudentsCoursesEntity, CourseEntity])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule { }
