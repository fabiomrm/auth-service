import {  Router } from "express";
import { AuthController } from "../controllers/AuthController";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import JWTAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";


const authorizationRoute = Router();
const authController = new AuthController();

authorizationRoute.post('/token', basicAuthenticationMiddleware, authController.basicAuth);
authorizationRoute.post('/token/validate', JWTAuthenticationMiddleware, authController.validate);


export default authorizationRoute;