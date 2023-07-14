const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    require: [true, 'Pls provide company'],
    maxLength: 50,
  },
  position: {
    type: String,
    require: [true, 'Pls provide position'],
    maxLength: 100,
  },
  status: {
    type: String,
    enum: ['interview', 'decilined', 'pending'],
    default: 'pending'
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    require: [true, 'Pls provide user']
  }
}, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema)