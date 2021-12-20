import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { authorization } = req.headers;
        if(!authorization)
        {
            throw new ForbiddenError('Credenciais não informadas');
        }

        return res.status(200).send('ok');
    } catch(err) {
        next(err);
    }
    
   
});


export default authorizationRoute;