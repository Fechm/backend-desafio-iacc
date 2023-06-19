import { BaseEntity } from '../../config/base.entity';
import { ICourse } from '../../interfaces/course.interface';
import { Entity, Column, OneToMany } from 'typeorm';
import { StudentsCoursesEntity } from '../../students/entities/studentsCourses.entity';

@Entity({ name: 'cursos' })
export class CourseEntity extends BaseEntity implements ICourse {
    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    year: number;

    @Column()
    semester: number;

    @Column()
    campus: string;

    @OneToMany(() => StudentsCoursesEntity, (studentsCourses) => studentsCourses.course)
    studentsIncludes: StudentsCoursesEntity[];
}
