import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ApiTokenCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers['api-token'] == ''){
            throw new BadRequestException('The token does not match');
        }
        console.log(req.headers);

        next();
    }
}