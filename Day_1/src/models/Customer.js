const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  phone: {type: String, require: true},
  address: {type: String, require: true}, 
  gender: {type: String, require: true}
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;