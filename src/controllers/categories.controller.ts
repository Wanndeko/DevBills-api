import { NextFunction, Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { StatusCodes } from "http-status-codes";
import { BodyRequest } from "./types";

export class CategoriesController{
    constructor(private categoriesService: CategoriesService){}

     create = async(
        request: BodyRequest<CreateCategoryDTO>,
        response: Response,
        next: NextFunction
        )=>{
        try {    
            const {title, color} = request.body
            
            const result = await this.categoriesService.create({title, color})

            return response.status(StatusCodes.CREATED).json(result)
        } 
        catch (error) {
            next(error)
            }
    }

    index= async (request: Request, response: Response, next: NextFunction)=> {
        try {      

            const result = await this.categoriesService.index()
            return response.status(StatusCodes.OK).json(result)
        } 
        catch (error) {
            next(error)
            }
    }
}