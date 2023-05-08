import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    // TODO: Exams is a one to many relation

}
