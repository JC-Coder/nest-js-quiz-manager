import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {

    @IsNotEmpty()
    question: string;


    @IsNotEmpty()
    quizId: number;

}