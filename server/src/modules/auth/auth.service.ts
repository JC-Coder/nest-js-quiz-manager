import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bycrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService){}

    // validate user login credentials 

    async validateUserCreds(email: string, password: string): Promise<any>{
        const user = await this.userService.getUserByEmail(email);

        // if user not found throw error
        if(!user) throw new BadRequestException();

        // cmopare password
        if(!(await bycrypt.compare(password, user.password)) ) throw new UnauthorizedException();

        return user;
    }


    // generate token for logged in user
    generateToken(user: any){
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                sub: user.id
            })
        }
    }
}
