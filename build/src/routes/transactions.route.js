"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRoutes = void 0;
const express_1 = require("express");
const transactions_controller_1 = require("../controllers/transactions.controller");
const transactions_factory_1 = require("../factories/transactions.factory");
const transactions_dto_1 = require("../dtos/transactions.dto");
const validator_middleware_1 = require("../middlewares/validator.middleware");
exports.transactionsRoutes = (0, express_1.Router)();
const controller = new transactions_controller_1.TransactionsController(transactions_factory_1.TransactionsFactory.getServiceInstance());
exports.transactionsRoutes.post('/', (0, validator_middleware_1.validator)({
    schema: transactions_dto_1.createTransactionsSchema,
    type: validator_middleware_1.ParamsType.BODY
}), controller.create);
exports.transactionsRoutes.get('/', (0, validator_middleware_1.validator)({
    schema: transactions_dto_1.indexTransactionsSchema,
    type: validator_middleware_1.ParamsType.QUERY
}), controller.index);
exports.transactionsRoutes.get('/dashboard', (0, validator_middleware_1.validator)({
    schema: transactions_dto_1.getDashBoardSchema,
    type: validator_middleware_1.ParamsType.QUERY
}), controller.getDashBoard);
exports.transactionsRoutes.get('/financial-evolution', (0, validator_middleware_1.validator)({
    schema: transactions_dto_1.getFinancialEvolutionSchema,
    type: validator_middleware_1.ParamsType.QUERY
}), controller.getFinancialEvolution);
