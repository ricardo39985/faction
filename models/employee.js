const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeScheema = new Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    firstName: String,
    lastName: String,
    email: String,
    rate: Number,
    department: {
      type: String,
      enum: [
        'Marketing',
        'Proposals',
        'Sales',
        'Project',
        'Designing',
        'Production',
        'Maintenance',
        'Store',
        'Procurement',
        'Quality',
        'Inspection',
        'Packaging',
        'Finance',
        'Dispatch',
        'Account',
        'Research',
        'Development',
        'Information Technology',
        'Human Resource',
        'Security',
        'Administration',
      ],
    },
    avatar: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Employee', employeeScheema);
