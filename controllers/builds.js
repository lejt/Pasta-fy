const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');

module.exports = {
    index,
    createPasta,
    createSauce,
}

function index(req, res) {

    // Build.findById({pasta: pasta._id}, function(err, build) {
    //     res.render('builds/index', {build});
    // })

    Build.find({}).populate('pasta').populate('sauce').exec(function (err, builds) {
        // Pasta.find({_id: builds.pasta}, function(err, pasta) {
            // Sauce.find({_id: builds.sauce}, function(err, sauce) {
                res.render('builds/index', {builds})
            // })
        // })
    })
    // Pasta.find({}, (err, pastas)=> {
    //     Sauce.find({}, (err, sauces)=> {
    //         Vege.find({}, (err, veges)=> {
    //             Protein.find({}, (err, proteins)=> {
    //                 res.render('builds/index', { pastas, sauces, veges, proteins });


    //             })
    //         })
    //     })
    // })
};

function createPasta(req, res) {
    Pasta.findById(req.params.id, (err, pasta)=> {
        // req.body.user = req.user._id;
        req.body.pasta = req.params.id;

        const build = new Build(req.body);
        build.save(function (err) {
            // console.log(build)
            res.redirect('/ingredients');
        })
    })
}
function createSauce(req, res) {
    Sauce.findById(req.params.id, (err, sauce)=> {
        // req.body.user = req.user._id;
        req.body.sauce = req.params.id;

        const build = new Build(req.body);
        build.save(function (err) {
            // console.log(build)
            res.redirect('/ingredients');
        })
    })
}