import { Router } from 'express';
import { UserController } from '../controllers/UserController';


const userRoutes = Router();
const user = new UserController();

userRoutes.get('/users', user.getAll);

userRoutes.get('/users/:uuid', user.getOne);

userRoutes.post('/users', user.create);

userRoutes.put('/users/:uuid', user.update);

userRoutes.delete('/users/:uuid', user.delete);

export default userRoutes;