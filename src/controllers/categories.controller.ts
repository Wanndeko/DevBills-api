import { NextFunction, Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { StatusCodes } from "http-status-codes";

export class CategoriesController{
    async create(
        request: Request<unknown, unknown, CreateCategoryDTO>,
        response: Response,
        next: NextFunction
        )
        {
        try {    
            const {title, color} = request.body
                
            const repository  =  new CategoriesRepository(CategoryModel)
            const service = new CategoriesService(repository)
            const result = await service.create({title, color})
            return response.status(StatusCodes.CREATED).json(result)
        } 
        catch (error) {
            next(error)
            }
    }

    async index(request: Request, response: Response, next: NextFunction)
        {
        try {      
            const repository  =  new CategoriesRepository(CategoryModel)
            const service = new CategoriesService(repository)
            const result = await service.index()
            return response.status(StatusCodes.OK).json(result)
        } 
        catch (error) {
            next(error)
            }
    }
}