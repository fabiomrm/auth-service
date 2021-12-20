import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import JWTAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';


const userRoutes = Router();
const user = new UserController();

userRoutes.get('/users', user.getAll);

userRoutes.get('/users/:uuid', JWTAuthenticationMiddleware, user.getOne);

userRoutes.post('/users', JWTAuthenticationMiddleware, user.create);

userRoutes.put('/users/:uuid', JWTAuthenticationMiddleware, user.update);

userRoutes.delete('/users/:uuid', JWTAuthenticationMiddleware, user.delete);

export default userRoutes;