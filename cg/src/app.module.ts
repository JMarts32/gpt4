import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CourseModule } from './course/course.module';
import { ExamModule } from './exam/exam.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseEntity } from './course/course.entity';
import { ExamEntity } from './exam/exam.entity';
import { QuestionEntity } from './question/question.entity';
import { AnswerEntity } from './answer/answer.entity';

@Module({
  imports: [CourseModule, ExamModule, QuestionModule, AnswerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'marts',
      password: 'admin',
      database: 'cg',
      entities: [CourseEntity, ExamEntity, QuestionEntity, AnswerEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
