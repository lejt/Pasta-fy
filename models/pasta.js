const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pastaSchema = new Schema({
    name: String,
    length: String,
    desc: String,
    recommend: String,
}, {timestamps: true});

module.exports = mongoose.model('Pasta', pastaSchema);