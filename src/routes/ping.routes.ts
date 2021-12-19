import {Request, Response, NextFunction, Router } from 'express';

const pingRoutes = Router();

pingRoutes.get('/ping', (req: Request, res: Response, next: NextFunction): void => {
    res.send({pong: true});
})

export default pingRoutes;