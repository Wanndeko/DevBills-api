// import { CreateTransactionDto } from "../../dtos/transactions.dto";
import { IndexTransactionsDto } from "../../dtos/transactions.dto";
import { Transaction } from "../../entities/transactions.entity";
import { TransactionModel } from "../schemas/transactions.schema";



export class TransactionsRepository{
    constructor(private model: typeof TransactionModel){}

    async create({title,amount,date,type,category}: Transaction): Promise<Transaction>{
        const createdTransaction = await this.model.create({title,amount,date,type,category})

        return createdTransaction.toObject<Transaction>()
    }

    async index({title, categoryId, beginDate, endDate}: IndexTransactionsDto): Promise<Transaction[]>{
        const whereParams: Record<string, unknown> = {
            ...(title && {title: {$regex: title, $options: 'i'}}),
            ...(categoryId && {'category._id': categoryId})
        }

        if(beginDate || endDate){
            whereParams.date={
                ...(beginDate && {$gte: beginDate}),
                ...(endDate && {$lte: endDate})
            }
        }

        const transactions = await this.model.find(whereParams)

        const transactionsMap  = transactions.map(item => item.toObject<Transaction>() )

        return transactionsMap
    }
}