const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {type: String, required: true},
    reviewRating: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});
const mealSchema = new Schema({
    name: String,
    pasta: {type: Schema.Types.ObjectId, ref: 'Pasta'},
    sauce: {type: Schema.Types.ObjectId, ref: 'Sauce'},
    vege: [{type: Schema.Types.ObjectId, ref: 'Vege'}],
    protein: [{type: Schema.Types.ObjectId, ref: 'Protein'}],
    ingredients: [{type: String}],
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    },
    recipe: String,
    userName: String,
    totalReviewRating: {type: Number, default: parseInt(0)},
    reviews: [reviewSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Meal', mealSchema);