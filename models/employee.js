const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeScheema = new Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    name: String,
    rate: Number,
    department: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Employee', employeeScheema)
