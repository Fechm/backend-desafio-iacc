import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { StudentEntity } from './student.entity';
import { CourseEntity } from '../../courses/entities/course.entity';

@Entity({ name: 'estudiantes_cursos' })
export class StudentsCoursesEntity extends BaseEntity {

    @ManyToOne(() => StudentEntity, (student) => student.coursesIncludes)
    student: StudentEntity;

    @ManyToOne(() => CourseEntity, (course) => course.studentsIncludes)
    course: CourseEntity;
}