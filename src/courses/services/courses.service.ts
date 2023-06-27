import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CourseEntity } from '../entities/course.entity';
import { StudentEntity } from '../../students/entities/student.entity';
import { StudentsCoursesEntity } from '../../students/entities/studentsCourses.entity';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(CourseEntity) private courseRepo: Repository<CourseEntity>,
    @InjectRepository(StudentsCoursesEntity) private studentCourseRepo: Repository<StudentsCoursesEntity>,) { }

  async createCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
    try {
      //Guardamos el curso en la bd
      return await this.courseRepo.save(createCourseDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }

  }

  async findCourses(): Promise<CourseEntity[]> {
    try {
      const courses: CourseEntity[] = await this.courseRepo.find();
      if (courses.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return courses;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }

  }

  async findCourseById(idCourse: string): Promise<CourseEntity> {
    try {
      const course: CourseEntity = await this.courseRepo.findOne({ where: { id: idCourse } });
      if (!course) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return course;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findAllStudentsByIdCourse(idCourse: string): Promise<StudentEntity[]> {
    try {
      const studentsCourses: StudentsCoursesEntity[] = await this.studentCourseRepo
        .createQueryBuilder('estudiantes_cursos')
        .innerJoinAndSelect('estudiantes_cursos.student', 'student')
        .where('estudiantes_cursos.course_id = :courseId', { courseId: idCourse })
        .getMany();

      if (studentsCourses.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return studentsCourses.map((studentCourse) => studentCourse.student);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async updateCourse(idCourse: string, body: UpdateCourseDto): Promise<UpdateResult> {
    try {
      const course = await this.courseRepo.update(idCourse, body);
      if (course.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar',
        });
      }
      return course;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async deleteCourse(idCourse: string): Promise<DeleteResult> {
    try {
      const course: DeleteResult = await this.courseRepo.delete(idCourse);
      if (course.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo eliminar',
        });
      }
      return course;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
