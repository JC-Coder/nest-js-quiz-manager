import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AdminRoleGuard implements CanActivate {

    canActivate(context: ExecutionContext){
        const request  = context.switchToHttp().getRequest();
        console.log(request);

        return false;
    }

}