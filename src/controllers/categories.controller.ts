import { Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";

export class CategoriesController{
    async create(_: Request, response: Response){
        const service = new CategoriesService()
        const result = await service.create()
        return response.status(201).json(result)
    }
}