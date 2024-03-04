"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const http_status_codes_1 = require("http-status-codes");
class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.create = async (request, response, next) => {
            try {
                const { title, color } = request.body;
                const result = await this.categoriesService.create({ title, color });
                return response.status(http_status_codes_1.StatusCodes.CREATED).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.index = async (request, response, next) => {
            try {
                const result = await this.categoriesService.index();
                return response.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.CategoriesController = CategoriesController;
