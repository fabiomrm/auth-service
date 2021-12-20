import {  Router } from "express";
import { AuthController } from "../controllers/AuthController";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";


const authorizationRoute = Router();
const authController = new AuthController();

authorizationRoute.post('/token', basicAuthenticationMiddleware, authController.basicAuth);


export default authorizationRoute;