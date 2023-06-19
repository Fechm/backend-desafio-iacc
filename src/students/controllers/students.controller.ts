import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { StudentsService } from '../services/students.service';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Controller('estudiantes')
@UsePipes(new ValidationPipe())
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.createStudent(createStudentDto);
  }

  @Post(':idStudent/cursos/:idCurso')
  public async addToProject(
    @Param('idStudent') idStudent: string,
    @Param('idCurso') idCurso: string,
  ) {
    return await this.studentsService.relationToCourse(idStudent, idCurso);
  }

  @Get()
  findAll() {
    return this.studentsService.findStudents();
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontro resultado'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findStudentById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.deleteStudent(id);
  }
}
