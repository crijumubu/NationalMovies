"use strict";
const { Schema, model } = require("mongoose");
class productModel {
    constructor() {
        this.productsSchema = new Schema({
            id: Number,
            name: String,
            detail: String,
            description: String,
            brand: String,
            price: Number,
            discount: Number,
            image: String
        }, {
            versionKey: false
        });
        this.exportSchema();
    }
    exportSchema() {
        module.exports = model('products', this.productsSchema);
    }
}
const product = new productModel();
