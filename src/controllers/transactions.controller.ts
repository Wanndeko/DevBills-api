import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import {
  CreateTransactionDto,
  GetDashBoardDto,
  GetFinancialEvolutionDto,
  IndexTransactionsDto
} from '../dtos/transactions.dto'
import { TransactionService } from '../services/transactions.service'
import { BodyRequest, QueryRequest } from './types'

export class TransactionsController {
  constructor(private transactionService: TransactionService) {}

  create = async (
    request: BodyRequest<CreateTransactionDto>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { title, amount, categoryId, date, type } = request.body

      const result = await this.transactionService.create({
        title,
        amount,
        categoryId,
        date,
        type
      })

      return response.status(StatusCodes.CREATED).json(result)
    } catch (error) {
      next(error)
    }
  }

  index = async (
    request: QueryRequest<IndexTransactionsDto>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { title, categoryId, beginDate, endDate } = request.query

      const result = await this.transactionService.index({
        title,
        categoryId,
        beginDate,
        endDate
      })

      return response.status(StatusCodes.OK).json(result)
    } catch (error) {
      next(error)
    }
  }

  getDashBoard = async (
    request: QueryRequest<GetDashBoardDto>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { beginDate, endDate } = request.query

      const result = await this.transactionService.getDashBoard({ beginDate, endDate })

      return response.status(StatusCodes.OK).json(result)
    } catch (error) {
      next(error)
    }
  }

  getFinancialEvolution = async (
    request: QueryRequest<GetFinancialEvolutionDto>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { year } = request.query

      const result = await this.transactionService.getFinancialEvolution({ year })

      return response.status(StatusCodes.OK).json(result)
    } catch (error) {
      next(error)
    }
  }
}
