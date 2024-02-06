import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

export function errorHandler(error: AppError | Error, _: Request, response : Response, __:NextFunction){
    if(error instanceof AppError){
        return response.status(error.statusCode).json({"message": error.statusCode})
    }

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({"message": error.message})
}

