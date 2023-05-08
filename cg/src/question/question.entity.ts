import { AnswerEntity } from "src/answer/answer.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

@Entity()
export class QuestionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    problem: string;

    @OneToOne(() => AnswerEntity, answer => answer.question)
    answer: AnswerEntity;
}
