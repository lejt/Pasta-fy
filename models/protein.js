const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proteinSchema = new Schema({
    name: String,
    animal: String,
}, {timestamps: true});

module.exports = mongoose.model('Protein', proteinSchema);