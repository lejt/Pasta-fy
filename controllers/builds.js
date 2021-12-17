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
    console.log("Build Page here")
    Build.findOne({user: req.user._id})
        .populate('pasta')
        .exec(function(err, build) {
            Pasta.find({_id: build.pasta}, function(err, pastas) {
                console.log(pastas);
                res.render('builds/index', {build, pastas});
            })
        })
};
