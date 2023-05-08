import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AnswerEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    response: string;

    @Column()
    correct: boolean;

    // TODO: One to one relation with question
}
