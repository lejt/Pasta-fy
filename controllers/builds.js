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


    // deletes the items off list if used to generate a meal 
    Build.findOne({user: req.user._id}, function(err, build) {

        // find idx and delete them off build list if used in combine
        const deleteIdxPasta = build.pasta.findIndex(p=> p._id == req.body.pasta);
        const deleteIdxSauce = build.sauce.findIndex(s=> s._id == req.body.sauce);

        buildVegeArrId = build.vege.map(v=> v._id);
        buildProteinArrId = build.vege.map(p=> p._id);
        
        selectedVegeArrId = req.body.vege.map(v => v);
        selectedProteinArrId = req.body.vege.map(p => p);
    
        for (let i=0; i<buildVegeArrId.length; i++) {
            for (let j=0; j<selectedVegeArrId.length; j++) {
                if (buildVegeArrId[i] == selectedVegeArrId[j]) {
                    build.vege.splice(i, 1);
                }
            }
        };
        for (let i=0; i<buildProteinArrId.length; i++) {
            for (let j=0; j<selectedProteinArrId.length; j++) {
                if (buildProteinArrId[i] == selectedProteinArrId[j]) {
                    build.protein.splice(i, 1);
                }
            }
        };
    
        build.pasta.splice(deleteIdxPasta, 1);
        build.sauce.splice(deleteIdxSauce, 1);
        
        build.save(function(err) {
            if (err) console.log(err);
            
            Meal.create(req.body, function(err, meal) {
                console.log(meal)
                res.redirect('/builds');
            })
        })
    })
}
