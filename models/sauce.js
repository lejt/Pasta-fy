const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sauceSchema = new Schema({
    name: String,
    base: String,
    desc: String,
    recommend: String,
}, {timestamps: true});

module.exports = mongoose.model('Sauce', sauceSchema);