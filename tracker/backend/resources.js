const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;