import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CoursesService } from '../services/courses.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

@Controller('cursos')
@UsePipes(new ValidationPipe())
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findCourses();
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontro resultado'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findCourseById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.updateCourse(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.deleteCourse(id);
  }
}
