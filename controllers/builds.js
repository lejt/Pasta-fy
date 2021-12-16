const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');

module.exports = {
    index,
    create,
}

function index(req, res) {

    // Build.findById({pasta: pasta._id}, function(err, build) {
    //     res.render('builds/index', {build});
    // })

    Build.find({}).populate('pasta').exec(function (err, builds) {
        Pasta.find({_id: builds.pasta}, function(err, pasta) {
            res.render('builds/index', {builds, pasta})
        })
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

function create(req, res) {
    Pasta.findById(req.params.id, (err, pasta)=> {
        // req.body.user = req.user._id;
        req.body.pasta = req.params.id;
        // console.log(req.body);
        // Build.find({}, function(err, build) {
            // console.log(build);
            // res.redirect('/builds/index');
        // })
        // console.log(req.body);
        // Build.create(req.body, function(err, build) {
            // console.log(build);
            // res.redirect('/baskets/index');
        // })

        const build = new Build(req.body);
        build.save(function (err) {
            // console.log(build)
            res.redirect('/builds');
        })



        // res.render('baskets/index', { pasta });
        // Sauce.find({}, (err, sauces)=> {
        //     Vege.find({}, (err, veges)=> {
        //         Protein.find({}, (err, proteins)=> {
        //             Build.create(req.body)
        //             res.render('baskets/index', { pastas, sauces, veges, proteins });
        //         })
        //     })
        // })
    })
}