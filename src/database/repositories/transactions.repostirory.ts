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
        const transactions = await this.model.find({
            title: {
                $regex: title,
                $options: 'i' 
            },
            'category._id': categoryId,
            date:{
                $gte: beginDate,
                $lte: endDate
            }
        })

        const transactionsMap  = transactions.map(item => item.toObject<Transaction>() )

        return transactionsMap
    }
}