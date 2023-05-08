import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { ExamModule } from './exam/exam.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [CourseModule, ExamModule, QuestionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
