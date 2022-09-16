import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()

export class QuizService {
    
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz> ){

    }

    // get all quizes

    getAllQuiz() { 
        return this.quizRepository.find();
    }

    // get one quiz via id

    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne({
            where: {id: id},
            relations: ['questions']
        })
    }
    

    // create new quiz

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}
 