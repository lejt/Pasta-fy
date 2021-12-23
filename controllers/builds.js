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
    req.body.name = req.body.mealName;
    req.body.userName = req.user.name;

    Build.findOne({user: req.user._id})
        .populate('pasta')
        .populate('sauce')
        .populate('vege')
        .populate('protein')
        .exec(function(err, build) {

            const deleteIdxPasta = build.pasta.findIndex(p=> p._id == req.body.pasta);
            const deleteIdxSauce = build.sauce.findIndex(s=> s._id == req.body.sauce);
            build.pasta.splice(deleteIdxPasta, 1);
            build.sauce.splice(deleteIdxSauce, 1);

            if (!req.body.vege && !req.body.protein) {
                    req.body.vege = [];
                    req.body.protein = [];
            } 
            if (!req.body.vege) req.body.vege = [];
            if (!req.body.protein) req.body.protein = [];
            
            req.body.vege.forEach(v => {
                let deleteIdxVege = build.vege.findIndex(bv=> bv._id == v);
                build.vege.splice(deleteIdxVege, 1);
            })
            req.body.protein.forEach(p => {
                let deleteIdxProtein = build.protein.findIndex(bp=> bp._id == p);
                build.protein.splice(deleteIdxProtein, 1);
            })

            build.save(function(err) {
                if (err) console.log(err);

                req.body.user = req.user._id;
                Meal.create(req.body, function(err, meal) {
                    // console.log(meal)
                    res.redirect('/builds');
                })
            })
        })
}