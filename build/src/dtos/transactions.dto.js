"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFinancialEvolutionSchema = exports.getDashBoardSchema = exports.indexTransactionsSchema = exports.createTransactionsSchema = void 0;
const zod_1 = require("zod");
const transactions_entity_1 = require("../entities/transactions.entity");
exports.createTransactionsSchema = {
    title: zod_1.z.string(),
    amount: zod_1.z.number().int().positive(),
    type: zod_1.z.nativeEnum(transactions_entity_1.TransactionTypes),
    date: zod_1.z.coerce.date(),
    categoryId: zod_1.z.string()
};
const createTransactionObject = zod_1.z.object(exports.createTransactionsSchema);
exports.indexTransactionsSchema = {
    title: zod_1.z.string().optional(),
    categoryId: zod_1.z.string().optional(),
    beginDate: zod_1.z.coerce.date().optional(),
    endDate: zod_1.z.coerce.date().optional()
};
const indexTransactionsObject = zod_1.z.object(exports.indexTransactionsSchema);
exports.getDashBoardSchema = {
    beginDate: zod_1.z.coerce.date().optional(),
    endDate: zod_1.z.coerce.date().optional()
};
const getDashBoardObject = zod_1.z.object(exports.getDashBoardSchema);
exports.getFinancialEvolutionSchema = {
    year: zod_1.z.string()
};
const getFinancialEvolutionObject = zod_1.z.object(exports.getFinancialEvolutionSchema);
