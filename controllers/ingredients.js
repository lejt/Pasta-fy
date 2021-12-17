const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');

module.exports = {
    index,
    createPasta,
    createSauce,
    createVege,
    createProtein,
    deleteSelectedPasta,
    deleteSelectedSauce,
    deleteSelectedVege,
    deleteSelectedProtein,
}

function index(req, res) {
    Pasta.find({}, (err, pastas)=> {
        Sauce.find({}, (err, sauces)=> {
            Vege.find({}, (err, veges)=> {
                Protein.find({}, (err, proteins)=> {
                    res.render('ingredients/index', { pastas, sauces, veges, proteins });
                })
            })
        })
    })
};

function createPasta(req, res) {
    // req.user._id is whoever is signed in 
    Build.findOne({user: req.user._id}, function(err, build) {
        build.pasta.push(req.params.id)
        build.save(function(err) {
            res.redirect('/ingredients');
        })
    })
};
function createSauce(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        build.sauce.push(req.params.id)
        build.save(function(err) {
            res.redirect('/ingredients');
        })
    })
};
function createVege(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        build.vege.push(req.params.id)
        build.save(function(err) {
            res.redirect('/ingredients');
        })
    })
};
function createProtein(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        build.protein.push(req.params.id)
        build.save(function(err) {
            res.redirect('/ingredients');
        })
    })
};

function deleteSelectedPasta(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        console.log(build.pasta);
        const deleteIdx = build.pasta.findIndex(p=> p._id == req.params.id);
        build.pasta.splice(deleteIdx, 1);
        
        build.save(function(err) {
            if (err) console.log(err);
            console.log(build.pasta);
            res.redirect('/builds');
        })

        // you can use this instead of function(err) cb above
        // build.save().then(function() {
        //     res.redirect('/builds');
        // })
    })
}

function deleteSelectedSauce(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        const deleteIdx = build.sauce.findIndex(s=> s._id == req.params.id);
        build.sauce.splice(deleteIdx, 1);
        
        build.save(function(err) {
            if (err) console.log(err);
            console.log(build.sauce);
            res.redirect('/builds');
        })
    })
}

function deleteSelectedVege(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        const deleteIdx = build.vege.findIndex(v=> v._id == req.params.id);
        build.vege.splice(deleteIdx, 1);
        
        build.save(function(err) {
            if (err) console.log(err);
            console.log(build.vege);
            res.redirect('/builds');
        })
    })
}

function deleteSelectedProtein(req, res) {
    Build.findOne({user: req.user._id}, function(err, build) {
        const deleteIdx = build.protein.findIndex(p=> p._id == req.params.id);
        build.protein.splice(deleteIdx, 1);
        
        build.save(function(err) {
            if (err) console.log(err);
            console.log(build.protein);
            res.redirect('/builds');
        })
    })
}