import { NextFunction, Request, Response } from "express";

import { StatusCodes } from "http-status-codes";
import { TransactionService } from "../services/transactions.service";
import { CreateTransactionDto } from "../dtos/transactions.dto";

export class TransactionsController{
    constructor(private transactionService: TransactionService){}

     create = async(
        request: Request<unknown, unknown, CreateTransactionDto>,
        response: Response,
        next: NextFunction
        )=>{
        try {    
            const {title, amount, categoryId, date, type} = request.body
            
            const result = await this.transactionService.create({title, amount, categoryId, date, type})

            return response.status(StatusCodes.CREATED).json(result)
        } 
        catch (error) {
            next(error)
            }
    }

   
    
}