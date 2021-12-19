const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});
const mealSchema = new Schema({
    name: String,
    ingredients: [{type: String}],
    ingredients2: [{type: Schema.Types.ObjectId, ref: 'Pasta'},
    {type: Schema.Types.ObjectId, ref: 'Sauce'},
    {type: Schema.Types.ObjectId, ref: 'Vege'},
    {type: Schema.Types.ObjectId, ref: 'Protein'},
    ],
    pasta: {type: Schema.Types.ObjectId, ref: 'Pasta'},
    sauce: {type: Schema.Types.ObjectId, ref: 'Sauce'},
    vege: {type: Schema.Types.ObjectId, ref: 'Vege'},
    protein: {type: Schema.Types.ObjectId, ref: 'Protein'},

    vegetables: [{type: Schema.Types.ObjectId, ref: 'Vege'}],
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    },
    recipe: String,
    reviews: [reviewSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Meal', mealSchema);