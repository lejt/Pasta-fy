const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pastaSchema = new Schema({
    name: String,
    desc: String,
    img: String,
}, {timestamps: true});

module.exports = mongoose.model('Pasta', pastaSchema);