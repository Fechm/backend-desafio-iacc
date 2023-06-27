import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './services/courses.service';
import { CoursesController } from './controllers/courses.controller';
import { CourseEntity } from './entities/course.entity';
import { StudentsCoursesEntity } from '../students/entities/studentsCourses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, StudentsCoursesEntity])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule { }
