import { NextFunction, Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { z } from "zod";

export class CategoriesController{
    async create(
        request: Request<unknown, unknown, CreateCategoryDTO>,
        response: Response,
        next: NextFunction
        )
        {
        try {    
            const validateSchema = z.object({
                title: z.string(),
                color: z.string().regex(/^#[A-Fa-f0-9]{6}$/)
            })
            
            validateSchema.parse(request.body)

            const {title, color} = request.body
                
            const repository  =  new CategoriesRepository(CategoryModel)
            const service = new CategoriesService(repository)
            const result = await service.create({title, color})
            return response.status(201).json(result)
        } 
        catch (error) {
            next(error)
            }
    }
}