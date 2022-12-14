const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    phone: Number,
    avatar: String
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Company', companySchema);
