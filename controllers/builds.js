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

    // deletes the items off list if used to generate a meal 
    Build.findOne({user: req.user._id}, function(err, build) {

        // find idx and delete them off build list if used in combine
        const deleteIdxPasta = build.pasta.findIndex(p=> p._id == req.body.pasta);
        const deleteIdxSauce = build.sauce.findIndex(s=> s._id == req.body.sauce);
        build.pasta.splice(deleteIdxPasta, 1);
        build.sauce.splice(deleteIdxSauce, 1);

        // check state of checkboxes for vege/protein and delete if necessary
        if (!req.body.vege && !req.body.protein) {
            req.body.vege = [];
            req.body.protein = [];
        } 
        if (!req.body.vege) req.body.vege = [];
        if (!req.body.protein) req.body.protein = [];
        
        // take only the ids and make a copy
        buildVegeArrId = build.vege.map(v=> v._id);
        buildProteinArrId = build.protein.map(p=> p._id);

        for (let i=0; i<buildVegeArrId.length; i++) {
            // when there is only one element in list, the list will become a 
            // string (i.e. list = "element1") instead of list = ["element1"], 
            // so a solution is proposed in the if statement below
            if (typeof req.body.vege === 'string') {
                req.body.vege = [req.body.vege];
            } 
            for (let j=0; j<req.body.vege.length; j++) {
                if (buildVegeArrId[i] == req.body.vege[j]) {
                    build.vege.splice(i, 1);
                }
            }
        };
        for (let i=0; i<buildProteinArrId.length; i++) {
            if (typeof req.body.protein === 'string') {
                req.body.protein = [req.body.protein];
            } 
            for (let j=0; j<req.body.protein.length; j++) {
                if (buildProteinArrId[i] == req.body.protein[j]) {
                    build.protein.splice(i, 1);
                }
            }
        };
    
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
