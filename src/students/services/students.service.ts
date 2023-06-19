import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from '../../utils/error.manager';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { StudentEntity } from '../entities/student.entity';
import { CourseEntity } from '../../courses/entities/course.entity';
import { StudentsCoursesEntity } from '../entities/studentsCourses.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity) private studentRepo: Repository<StudentEntity>,
    @InjectRepository(CourseEntity) private courseRepo: Repository<CourseEntity>,
    @InjectRepository(StudentsCoursesEntity) private studentCourseRepo: Repository<StudentsCoursesEntity>,
  ) { }

  async createStudent(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    try {
      //Guardamos el curso en la bd
      return await this.studentRepo.save(createStudentDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findStudents(): Promise<StudentEntity[]> {
    try {
      const students: StudentEntity[] = await this.studentRepo.find();
      if (students.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return students;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findStudentById(idStudent: string): Promise<StudentEntity> {
    try {
      const student: StudentEntity = await this.studentRepo.findOne({ where: { id: idStudent } });
      if (!student) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return student;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async relationToCourse(idStudent: string, idCourse: string) {
    try {
      const student: StudentEntity = await this.studentRepo.findOne({ where: { id: idStudent } });
      if (!student) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro estudiante',
        });
      }
      const course: CourseEntity = await this.courseRepo.findOne({ where: { id: idCourse } });
      if (!course) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro curso',
        });
      }
      const studentCourse = new StudentsCoursesEntity();
      studentCourse.course = course;
      studentCourse.student = student;
      return await this.studentCourseRepo.save(studentCourse);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async updateStudent(idStudent: string, body: UpdateStudentDto): Promise<UpdateResult> {
    try {
      const student = await this.studentRepo.update(idStudent, body);
      if (student.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar',
        });
      }
      return student;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async deleteStudent(idStudent: string): Promise<DeleteResult> {
    try {
      const student: DeleteResult = await this.studentRepo.delete(idStudent);
      if (student.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo eliminar',
        });
      }
      return student;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
