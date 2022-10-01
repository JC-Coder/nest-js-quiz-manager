import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { AdminRoleGuard } from 'src/modules/auth/admin-role.guard';



@ApiTags('quiz')
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  // Get all quizes

  @Get('/')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }

  //get quiz using pagination
  @Get('/paginate')
  async getPaginateQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ): Promise<Pagination<Quiz>> {
    limit = limit > 100 ? 100: limit; 
    return await this.quizService.paginate({
      page, limit
    });
  }

  // get quiz by id
  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  // create new quiz

  @Post('/create')
  @UsePipes(ValidationPipe)
  @UseGuards(AdminRoleGuard)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
