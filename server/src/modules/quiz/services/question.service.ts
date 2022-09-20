import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  // create new question

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }

  // Get one question by id
  async getQuestionById(id: number): Promise<Question> {
    const result = await this.questionRepository.findOne({
      where: { id: id },
      relations: ['options'],
    });

    if (!result) {
      throw new HttpException(`no question found with id: ${id}`, 404);
    }

    return await result;
  }
}
