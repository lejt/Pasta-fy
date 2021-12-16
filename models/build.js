const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildSchema = new Schema({
    buildID: {type: String},
    pasta: [{
        type: Schema.Types.ObjectId,
        ref: 'Pasta'
    }],
    sauce: [{
        type: Schema.Types.ObjectId,
        ref: 'Sauce'
    }],
    vege: [{
        type: Schema.Types.ObjectId,
        ref: 'Vege'
    }],
    protein: [{
        type: Schema.Types.ObjectId,
        ref: 'Protein'
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
}, {timestamps: true});

module.exports = mongoose.model('Build', buildSchema);