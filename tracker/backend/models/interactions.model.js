const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interactionSchema = new Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;