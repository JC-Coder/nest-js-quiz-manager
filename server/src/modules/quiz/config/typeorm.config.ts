import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'quiz_db',
  entities: [Quiz, Question,],
  synchronize: true,
  dropSchema: false,
  logging: true,
  autoLoadEntities: true,
};
