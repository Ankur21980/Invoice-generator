const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({
    // name: String,
    // email: String,
    // password: String

    transaction: String,
    total: Number,
    date: String,
    items: [{
        description: String,
        rate: Number,
        qty1: Number,
        lineTotal: Number
    }]

});

module.exports = mongoose.model("invoices", invoiceSchema);