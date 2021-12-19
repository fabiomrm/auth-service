import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../models/errors/database.error.model";

function errorHandler (error: any, req: Request, res: Response, next: NextFunction)
{
    if (error instanceof DatabaseError)
    {
        res.sendStatus(400) //BAD REQUEST
    }
    else
    {
        res.sendStatus(500) //SERVER ERROR
    }
}

export default errorHandler;