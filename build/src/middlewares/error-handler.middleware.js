"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const app_error_1 = require("../errors/app.error");
const http_status_codes_1 = require("http-status-codes");
function errorHandler(error, _, response, __) {
    if (error instanceof app_error_1.AppError) {
        return response.status(error.statusCode).json({ "message": error.statusCode });
    }
    return response.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ "message": error.message });
}
exports.errorHandler = errorHandler;
