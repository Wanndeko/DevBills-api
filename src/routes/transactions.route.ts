import { Router } from "express"
import { TransactionsController } from "../controllers/transactions.controller"
import { TransactionsFactory } from "../factories/transactions.factory"
import { createTransactionsSchema, getDashBoardSchema, indexTransactionsSchema } from "../dtos/transactions.dto"
import { ParamsType, validator } from "../middlewares/validator.middleware"
import { Query } from "mongoose"



export const transactionsRoutes = Router()

const controller = new TransactionsController(TransactionsFactory.getServiceInstance())

transactionsRoutes.post('/', validator({
    schema: createTransactionsSchema,
    type: ParamsType.BODY   
}), controller.create)  

transactionsRoutes.get('/', validator({
    schema:indexTransactionsSchema,
    type: ParamsType.QUERY
}), controller.index)

transactionsRoutes.get('/dashboard', validator({
    schema: getDashBoardSchema,
    type: ParamsType.QUERY
}), controller.getDashBoard)