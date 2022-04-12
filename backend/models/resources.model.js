const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String },
  phoneNumber: { type: String },
  location: { type: String },
  keywords: { type: String}
}, {
  timestamps: true,
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;