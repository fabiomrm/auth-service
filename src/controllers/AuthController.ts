import { Request, Response, NextFunction } from 'express';
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from '../repositories/user.repository';
import JWT from 'jsonwebtoken';

export class AuthController
{
    public async basicAuth (req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {
            const { authorization } = req.headers;
            if(!authorization)
            {
                throw new ForbiddenError('Credenciais não informadas');
            }

            const [authType, authToken] = authorization.split(' ');

            if(authType !== 'Basic' || !authToken)
            {
                throw new ForbiddenError('Tipo de autenticação inválida!');
            }

            const tokenContent = Buffer.from(authToken, 'base64').toString('utf-8');
            
            const [username, password] = tokenContent.split(':');

            if(!username || !password)
            {
                throw new ForbiddenError('Credenciais não preenchidas!');
            }

            const user = await userRepository.findByUsernameAndPassword(username, password);
            
            if (!user) {
                throw new ForbiddenError('Usuário ou senha inválidos!');
            }

            //MONTAR JWT
            const JWTPayload = { username: user.username};
            const secretKey = 'MY_SECRET_KEY';
            const JWTOptions = { subject: user?.uuid };

            const jwt = JWT.sign(JWTPayload, secretKey, JWTOptions);

            res.status(200).json({ token: jwt });
        } catch(err) {

            next(err);
        }
    }
}
