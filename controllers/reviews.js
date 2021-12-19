const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');
const Meal = require('../models/meal');

module.exports = {
    create,
    delete: deleteReview,
    update: updateReview,
}

function create(req, res) {
    Meal.findById(req.params.id, (err, meal)=> {

        // Add the user-centric info to req.body (the new review)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        meal.reviews.push(req.body);
        meal.save(function(err) {
            if (err) console.log(err);
            // console.log(meal);
            res.redirect(`/ingredients/${req.params.id}`);
        })
    })
}

function deleteReview(req, res) {
    Meal.findOne({"reviews._id": req.params.id}, (err, meal)=> {
        // locate the review in meal with its review id using .id() for arrays
        const review = meal.reviews.id(req.params.id);
        // second layer of check if user wrote the review, if not, redirect
        if (!review.user.equals(req.user._id)) return res.redirect(`/ingredients/${meal._id}`);

        review.remove();

        meal.save(function(err) {
            if (err) console.log(err);
            res.redirect(`/ingredients/${meal._id}`)
        })
    })
}

function updateReview(req, res) {
    console.log('UPDATE HERE');
    //replace old content with new content, replace review, replace date, same name
    
    Meal.findOne({"reviews._id": req.params.id}, (err, meal)=> {
        const review = meal.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) return res.redirect(`/ingredients/${meal._id}`);

        review.content = req.body.content;
        review.rating = req.body.rating;
        meal.save(function(err) {
            if (err) console.log(err);
            res.redirect(`/ingredients/${meal._id}`)
        })
    })

  
}