import { BaseEntity } from '../../config/base.entity';
import { IStudent } from '../../interfaces/student.interface';
import { Entity, Column, OneToMany } from 'typeorm';
import { StudentsCoursesEntity } from './studentsCourses.entity';

@Entity({ name: 'estudiantes' })
export class StudentEntity extends BaseEntity implements IStudent {
    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column()
    age: string;

    @Column()
    address: string;

    @OneToMany(() => StudentsCoursesEntity, (studentsCourses) => studentsCourses.student)
    coursesIncludes: StudentsCoursesEntity[];
}
