/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){}

    // Get all quizes

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }


    // get quiz by id 
    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz>{
        return await this.quizService.getQuizById(id);
    }


    // create new quiz

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}
