"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const http_status_codes_1 = require("http-status-codes");
class TransactionsController {
    constructor(transactionService) {
        this.transactionService = transactionService;
        this.create = async (request, response, next) => {
            try {
                const { title, amount, categoryId, date, type } = request.body;
                const result = await this.transactionService.create({ title, amount, categoryId, date, type });
                return response.status(http_status_codes_1.StatusCodes.CREATED).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.index = async (request, response, next) => {
            try {
                const { title, categoryId, beginDate, endDate } = request.query;
                const result = await this.transactionService.index({ title, categoryId, beginDate, endDate });
                return response.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getDashBoard = async (request, response, next) => {
            try {
                const { beginDate, endDate } = request.query;
                const result = await this.transactionService.getDashBoard({ beginDate, endDate });
                return response.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getFinancialEvolution = async (request, response, next) => {
            try {
                const { year } = request.query;
                const result = await this.transactionService.getFinancialEvolution({ year });
                return response.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.TransactionsController = TransactionsController;
