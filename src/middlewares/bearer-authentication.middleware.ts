import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';
import userRepository from "../repositories/user.repository";

async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction)
{
    try {
        const { authorization } = req.headers;


        if(!authorization)
        {
            throw new ForbiddenError('Credenciais não informadas');
        }
        const [authType, authToken] = authorization.split(' ');
        
        if(authType !== 'Bearer' || !authToken)
        {
            throw new ForbiddenError('Tipo de autenticação inválida');
        }

        const tokenPayload = JWT.verify(authToken, 'MY_SECRET_KEY');
        tokenPayload.sub

        if(typeof tokenPayload !== 'object' || !tokenPayload.sub)
        {
            throw new ForbiddenError('Token invádlido')
        }

        const uuid = tokenPayload.sub;
        const user = {
            uuid: tokenPayload.sub,
            username: tokenPayload.username
        };
        
        req.user = user;
        next();
    } catch(err)
    {
        next(err);
    }
} 


export default bearerAuthenticationMiddleware;