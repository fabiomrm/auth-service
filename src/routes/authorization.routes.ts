import {  Router } from "express";
import { AuthController } from "../controllers/AuthController";


const authorizationRoute = Router();
const authController = new AuthController();

authorizationRoute.post('/token', authController.basicAuth);


export default authorizationRoute;