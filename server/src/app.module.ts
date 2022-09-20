import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './modules/quiz/config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot(),
    QuizModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
