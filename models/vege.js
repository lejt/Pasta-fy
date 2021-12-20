const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegeSchema = new Schema({
    name: String,
    desc: String,
    recommend: String,
    img: String,
}, {timestamps: true});

module.exports = mongoose.model('Vege', vegeSchema);