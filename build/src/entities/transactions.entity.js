"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionTypes = void 0;
const category_entity_1 = require("./category.entity");
var TransactionTypes;
(function (TransactionTypes) {
    TransactionTypes["INCOME"] = "income";
    TransactionTypes["EXPENSE"] = "expense";
})(TransactionTypes || (exports.TransactionTypes = TransactionTypes = {}));
class Transaction {
    constructor({ _id, amount, date, category, type, title }) {
        this._id = _id;
        this.title = title;
        this.amount = amount;
        this.date = new Date(date);
        this.category = new category_entity_1.Category(category);
        this.type = type;
    }
}
exports.Transaction = Transaction;
