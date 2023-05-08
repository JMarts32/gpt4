import { QuestionEntity } from "src/question/question.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class AnswerEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    response: string;

    @Column()
    correct: boolean;

    @OneToOne(() => QuestionEntity, question => question.answer)
    @JoinColumn()
    question: QuestionEntity;
}
