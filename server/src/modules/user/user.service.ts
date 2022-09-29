import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  // register new user 

  async doUserRegistration(userRegister) : Promise<User>{
   

    const user = await this.userRepository.create({
      name: userRegister.name,
      email: userRegister.email,
      password: userRegister.password
    });

    return await this.userRepository.save(user);
  }


  // get user by email 
  async getUserByEmail(email:string): Promise<User | undefined>{
    let result = await this.userRepository.findOne({
      where: {email: email}
    })

    return result;
  }

}
