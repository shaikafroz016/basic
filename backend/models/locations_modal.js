const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  city: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;