const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  Title: String,
  Description: String,
  CreationDate: { type: Date, default: Date.now },
  UpdateDate: { type: Date }
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;