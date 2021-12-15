const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildSchema = new Schema({
    pasta: {
        type: Schema.Types.ObjectId,
        ref: 'Pasta'
    },
    sauce: {
        type: Schema.Types.ObjectId,
        ref: 'Sauce'
    },
    vege: {
        type: Schema.Types.ObjectId,
        ref: 'Vege'
    },
    protein: {
        type: Schema.Types.ObjectId,
        ref: 'Protein'
    },
}, {timestamps: true});

module.exports = mongoose.model('Build', buildSchema);