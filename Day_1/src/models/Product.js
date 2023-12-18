const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Product_name: {type: String, require: true}, 
  manufacturer: {type: String, require: true}, 
  year_of_manufacture: {type: Number, require: true},
   quantity: { type: Number, require: true},
    price: {type: Number, require: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;