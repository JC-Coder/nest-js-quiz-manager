import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  // create new option for a question
  @Post()
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      createOption.questionId,
    );

    return await this.optionService.createOption(createOption, question);
  }
}
