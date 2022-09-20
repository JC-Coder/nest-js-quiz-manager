import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  // get all quizes

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'op')
      .getMany();
  }

  // get one quiz via id

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions', 'questions.options'],
    });
  }

  // create new quiz

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
