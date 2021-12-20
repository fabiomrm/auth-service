import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';

export class AuthController
{
    public async basicAuth (req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {
            const user = req.user;
            
            //BUILD JWT
            const JWTPayload = { username: user.username};
            const secretKey = 'MY_SECRET_KEY';
            const JWTOptions = { 
                subject: user?.uuid,
                expiresIn: 60000000,
            };

            const jwt = JWT.sign(JWTPayload, secretKey, JWTOptions);

            res.status(200).json({ token: jwt });
        } catch(err) {

            next(err);
        }
    }

    public validate(req: Request, res: Response, next: NextFunction): void
    {
        res.sendStatus(200);
    }
}
