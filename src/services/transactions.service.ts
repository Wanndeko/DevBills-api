import { StatusCodes } from 'http-status-codes'
import { promise } from 'zod'

import { CategoriesRepository } from '../database/repositories/categories.repository'
import { TransactionsRepository } from '../database/repositories/transactions.repostirory'
import {
  CreateTransactionDto,
  GetDashBoardDto,
  GetFinancialEvolutionDto,
  IndexTransactionsDto
} from '../dtos/transactions.dto'
import { Balance } from '../entities/balance.entity'
import { Expense } from '../entities/expense.entity'
import { Transaction } from '../entities/transactions.entity'
import { AppError } from '../errors/app.error'

export class TransactionService {
  constructor(
    private transactionsRepository: TransactionsRepository,
    private categoriesRepository: CategoriesRepository
  ) {}

  async create({
    title,
    amount,
    categoryId,
    date,
    type
  }: CreateTransactionDto): Promise<Transaction> {
    const category = await this.categoriesRepository.findById(categoryId)

    if (!category) {
      throw new AppError('Category does not exists', StatusCodes.NOT_FOUND)
    }

    const transaction = new Transaction({
      title,
      amount,
      date,
      category,
      type
    })

    const createdTransaction = await this.transactionsRepository.create(transaction)
    return createdTransaction
  }

  async index(filters: IndexTransactionsDto): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.index(filters)
    return transactions
  }

  async getDashBoard({
    beginDate,
    endDate
  }: GetDashBoardDto): Promise<{ balance: Balance; expenses: Expense[] }> {
    let [balance, expenses] = await Promise.all([
      this.transactionsRepository.getBalance({
        beginDate,
        endDate
      }),
      this.transactionsRepository.getExpenses({
        beginDate,
        endDate
      })
    ])

    if (!balance) {
      balance = new Balance({
        _id: null,
        incomes: 0,
        expenses: 0,
        balance: 0
      })
    }
    return { balance, expenses }
  }

  async getFinancialEvolution({ year }: GetFinancialEvolutionDto): Promise<Balance[]> {
    const financialEvolution = await this.transactionsRepository.getFinancialEvolution({
      year
    })

    return financialEvolution
  }
}
