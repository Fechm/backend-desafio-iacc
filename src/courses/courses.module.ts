import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './services/courses.service';
import { CoursesController } from './controllers/courses.controller';
import { CourseEntity } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule { }
