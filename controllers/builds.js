const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');
const Meal = require('../models/meal');

module.exports = {
    index,
    combine,
}

function index(req, res) {
    // Build.findOne({user: req.user._id})
    // .populate('pasta')
    // .exec(function (err, build) {
    //     // Pasta.find({_id: builds.pasta}, function(err, pasta) {
    //     //     Sauce.find({_id: builds.sauce}, function(err, sauce) {
    //             console.log(build.pasta);
    //             res.render('builds/index', {build})
    //     //     })
    //     // })
    // })
    Build.findOne({user: req.user._id})
        .populate('pasta')
        .populate('sauce')
        .populate('vege')
        .populate('protein')
        .exec(function(err, build) {
            // Pasta.find({_id: build.pasta}, function(err, pastas) {
            //     Sauce.find({_id: build.sauce}, function(err, sauces) {
            //         Vege.find({_id: build.vege}, function(err, veges) {
            //             Protein.find({_id: build.protein}, function(err, proteins) {
                            // console.log(pastas);
                            // console.log(sauces);
                            // console.log(veges);
                            // console.log(proteins);
                            res.render('builds/index', {build});
                //         })
                //     })
                // })
            // })
        })
};


function combine(req, res) {
    req.body.ingredients = []
    req.body.ingredients.push(req.body.pasta, req.body.sauce, req.body.vege, req.body.protein);
    req.body.name = req.body.mealName;

    // deletes the items off list if used to generate a meal 
    Build.findOne({user: req.user._id}, function(err, build) {
        const deleteIdxPasta = build.pasta.findIndex(p=> p._id == req.body.pasta);
        const deleteIdxSauce = build.sauce.findIndex(p=> p._id == req.body.sauce);
        const deleteIdxVege = build.vege.findIndex(p=> p._id == req.body.vege);
        const deleteIdxProtein = build.protein.findIndex(p=> p._id == req.body.protein);
        build.pasta.splice(deleteIdxPasta, 1);
        build.sauce.splice(deleteIdxSauce, 1);
        build.vege.splice(deleteIdxVege, 1);
        build.protein.splice(deleteIdxProtein, 1);
        
        build.save(function(err) {
            if (err) console.log(err);
            
            Meal.create(req.body, function(err, meal) {
                console.log(meal)
                res.redirect('/builds');
            })
        })
    })
}
