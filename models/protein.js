const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proteinSchema = new Schema({
    name: String,
    desc: String,
    img: String,
}, {timestamps: true});

module.exports = mongoose.model('Protein', proteinSchema);