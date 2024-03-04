"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsFactory = void 0;
const categories_repository_1 = require("../database/repositories/categories.repository");
const transactions_repostirory_1 = require("../database/repositories/transactions.repostirory");
const category_schema_1 = require("../database/schemas/category.schema");
const transactions_schema_1 = require("../database/schemas/transactions.schema");
const transactions_service_1 = require("../services/transactions.service");
class TransactionsFactory {
    static getServiceInstance() {
        if (this.transactionService) {
            return this.transactionService;
        }
        const repository = new transactions_repostirory_1.TransactionsRepository(transactions_schema_1.TransactionModel);
        const categoriesRepository = new categories_repository_1.CategoriesRepository(category_schema_1.CategoryModel);
        const service = new transactions_service_1.TransactionService(repository, categoriesRepository);
        this.transactionService = service;
        return service;
    }
}
exports.TransactionsFactory = TransactionsFactory;
