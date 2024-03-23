const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let invoiceSchema = new Schema({
    invoice_gst_type: {
        type: String
    },
    invoice_cash: {
        type: String
    },
    invoice_warehouse: {
        type: String
    },
    invoice_customer: {
        type: String
    },
    invoice_email: {
        type: String
    },
    invoice_date: {
        type: String
    },
    invoice_number: {
        type: String
    },
    invoice_refno: {
        type: String
    },
    invoice_refdate: {
        type: String
    },
    invoice_salesman: {
        type: String
    },
    invoice_tax: {
        type: String
    },
    invoice_payment: {
        type: String
    },
    invoice_due_date: {
        type: String
    },
    invoice_payment_link: {
        type: String
    },
    invoice_item_value: {
        type: String
    },
    invoice_discount: {
        type: String
    },
    invoice_cutt_chrg: {
        type: String
    },
    invoice_taxable: {
        type: String
    },
    invoice_tax_amnt: {
        type: String
    },
    invoice_cess_amnt: {
        type: String
    },
    invoice_add_disc: {
        type: String
    },
    invoice_tcs: {
        type: String
    },
    invoice_roundoff: {
        type: String
    },
    invoice_doc_amnt: {
        type: String
    },

    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'invoice'
}
);
module.exports = mongoose.model('InvoiceSchema', invoiceSchema)