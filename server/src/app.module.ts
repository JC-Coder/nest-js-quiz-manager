import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './modules/quiz/config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), QuizModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
