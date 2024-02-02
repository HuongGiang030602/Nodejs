const { date } = require('joi');
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: { type: String,require:true},
  position: { type: Number,default:0},
  date_created: { type: Date, default: Date.now()},
  idBoard: {type:String,require:true}
});

listSchema.pre('save', async function(next) {
  if (this.isNew) {
    try {
      const count = await mongoose.model('List', listSchema).countDocuments();
      this.position = count + 1;
      next();
    } catch (err) {
      return next(err);
    }
  } else {
    next();
  }
});


const List = mongoose.model('List', listSchema);

module.exports = List;