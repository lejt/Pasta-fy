const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');

module.exports = {
    index,
    // createPasta,
    // createSauce,
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
            Pasta.find({_id: build.pasta}, function(err, pastas) {
                Sauce.find({_id: build.sauce}, function(err, sauces) {
                    Vege.find({_id: build.vege}, function(err, veges) {
                        Protein.find({_id: build.protein}, function(err, proteins) {
                            // console.log(pastas);
                            // console.log(sauces);
                            // console.log(veges);
                            // console.log(proteins);
                            res.render('builds/index', {build, pastas, sauces, veges, proteins});
                        })
                    })
                })
            })
        })
};
