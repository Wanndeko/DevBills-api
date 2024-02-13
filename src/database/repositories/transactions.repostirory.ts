// import { CreateTransactionDto } from "../../dtos/transactions.dto";
import { Transaction } from "../../entities/transactions.entity";
import { TransactionModel } from "../schemas/transactions.schema";



export class TransactionsRepository{
    constructor(private model: typeof TransactionModel){}

    async create({title,amount,date,type,category}: Transaction): Promise<Transaction>{
        const createdTransaction = await this.model.create({title,amount,date,type,category})

        return createdTransaction.toObject<Transaction>()
    }

    async index(): Promise<Transaction[]>{
        const transactions = await this.model.find()

        const transactionsMap  = transactions.map(item => item.toObject<Transaction>() )

        return transactionsMap
    }
}