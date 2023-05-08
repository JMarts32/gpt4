import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    duration: number;

    // TODO: Question is a one to many relation
}
