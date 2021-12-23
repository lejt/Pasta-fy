const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegeSchema = new Schema({
    name: String,
    desc: String,
    img: String,
}, {timestamps: true});

module.exports = mongoose.model('Vege', vegeSchema);