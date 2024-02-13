import {z} from 'zod'
import { TransactionTypes } from '../entities/transactions.entity'

export const createTransactionsSchema ={
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TransactionTypes),
    date: z.coerce.date(),
    categoryId: z.string()    
}

const createTransactionObject = z.object(createTransactionsSchema)
export type CreateTransactionDto = z.infer<typeof createTransactionObject>