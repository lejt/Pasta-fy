const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proteinSchema = new Schema({
    name: String,
    animal: String,
    desc: String,
    recommend: String,
}, {timestamps: true});

module.exports = mongoose.model('Protein', proteinSchema);