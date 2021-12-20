import { Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/user.repository';

export class UserController
{
    public async getAll(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        const users = await userRepository.findAll();


        res.status(200).send({ users })
        
    }

    public async getOne(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {

            const { uuid } = req.params;

            const user = await userRepository.findById(uuid);

            res.status(200).send({ user })
        } catch(error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction) : Promise<void>
    {
        const user = req.body;

        const newUserUuid = await userRepository.createUser(user);
        
        res.status(200).send({ newUserUuid })
    }

    public async update(req: Request, res: Response, next: NextFunction) : Promise<void>
    {
        const { uuid } = req.params;
        const modifiedUser = req.body;
        
        modifiedUser.uuid = uuid;

        const updateUser = await userRepository.updateUser(modifiedUser);



        res.status(200).send({  updateUser })
    }

    public async delete(req: Request, res: Response, next: NextFunction) : Promise<void>
    {
        const { uuid } = req.params;

        await userRepository.removeUser(uuid);
        res.status(200).send(`Usuário deletado: ${uuid}`);
    }
}