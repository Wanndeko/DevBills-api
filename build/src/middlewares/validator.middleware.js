"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.ParamsType = void 0;
const zod_1 = require("zod");
const app_error_1 = require("../errors/app.error");
const http_status_codes_1 = require("http-status-codes");
var ParamsType;
(function (ParamsType) {
    ParamsType["QUERY"] = "query";
    ParamsType["BODY"] = "body";
})(ParamsType || (exports.ParamsType = ParamsType = {}));
function validator(params) {
    return (request, response, next) => {
        const result = zod_1.z.object(params.schema).safeParse(request[params.type]);
        if (!result.success) {
            const errorFormatted = result.error.issues.map((item) => `${item.path.join('.')}: ${item.message}`);
            throw new app_error_1.AppError(errorFormatted, http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY);
        }
        request[params.type] = result.data;
        next();
    };
}
exports.validator = validator;
