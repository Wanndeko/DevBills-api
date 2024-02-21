import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repostirory";
import { CreateTransactionDto, IndexTransactionsDto } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transactions.entity";
import { AppError } from "../errors/app.error";



export class TransactionService{
    constructor(
        private transactionsRepository: TransactionsRepository,
        private categoriesRepository : CategoriesRepository    
    ){}

    async create({
        title,
        amount,
        categoryId,
        date,
        type
    }: CreateTransactionDto): Promise<Transaction>{
        const category = await this.categoriesRepository.findById(categoryId)

        if(!category){
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

    async index(filters: IndexTransactionsDto): Promise<Transaction[]>{
        const transactions = await this.transactionsRepository.index(filters)
        return transactions
    }

}