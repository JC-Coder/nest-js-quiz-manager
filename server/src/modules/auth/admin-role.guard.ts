import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable()
export class AdminRoleGuard implements CanActivate {

    // constructor(private userService: UserService){}

    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        if(request?.user){
            const { id } = request.user;
            console.log(id);

            // return true;
        }

       return false;
    }

}