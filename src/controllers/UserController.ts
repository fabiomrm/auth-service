import { Request, Response, NextFunction } from 'express';

export class UserController
{
    public async getAll(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        const users:any = [];
        res.status(200).send({ users })
        
    }

    public async getOne(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        const { uuid } = req.params;

        res.status(200).send({ uuid })

    }

    public async create(req: Request, res: Response, next: NextFunction) : Promise<void>
    {
        const user = req.body;

        res.status(200).send({ user })
    }

    public async update(req: Request, res: Response, next: NextFunction) : Promise<void>
    {
        const { uuid } = req.params;

        res.status(200).send({ uuid })
    }

    public async delete(req: Request, res: Response, next: NextFunction) : Promise<void>
    {
        const { uuid } = req.params;
        
        res.status(200).send("Deletado!");
    }
}