const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');
const Meal = require('../models/meal');

module.exports = {
    index,
    show,
    createPasta,
    createSauce,
    createVege,
    createProtein,
    deleteSelectedPasta,
    deleteSelectedSauce,
    deleteSelectedVege,
    deleteSelectedProtein,
    createDesc,
    updateDesc,
}

function index(req, res) {
    Pasta.find({}, (err, pastas)=> {
        Sauce.find({}, (err, sauces)=> {
            Vege.find({}, (err, veges)=> {
                Protein.find({}, (err, proteins)=> {
                    Meal.find({}, (err, meals)=> {
                        res.render('ingredients/index', { pastas, sauces, veges, proteins, meals });
                    })
                })
            })
        })
    })
};

function show(req, res) {
    // open show page based on what was clicked
    // tests req.params.id in all categories and will only output the category that contains it
    Pasta.findById(req.params.id, (err, pasta)=> {
        Sauce.findById(req.params.id, (err, sauce)=> {
            Vege.findById(req.params.id, (err, vege)=> {
                Protein.findById(req.params.id, (err, protein)=> {
                    Meal.findById(req.params.id, (err, meal)=> {
                        if (pasta || sauce || vege || protein) {
                            res.render('ingredients/show', {pasta, sauce, vege, protein, meal})
                        } else {
                            Meal.findById(req.params.id)
                            .populate('pasta')
                            .populate('sauce')
                            .populate('vege')
                            .populate('protein')

                            .exec(function(err, meal) {
                                res.render('ingredients/show', {meal, pasta, sauce, vege, protein})
                            })
                        }
                    })
                })
            })
        })
    })
}

function createPasta(req, res) {
    // req.user._id is whoever is signed in 
    Build.findOne({user: req.user._id}, function(err, build) {
        if (!build.pasta) {
            build.pasta = [];
        }
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

function createDesc(req, res) {
    Meal.findById(req.params.id, (err, meal)=> {
        meal.desc = req.body.desc;
        meal.save(function(err) {
            if (err) console.log(err);
            // console.log(meal);
            res.redirect(`/ingredients/${req.params.id}`);
        })
    })
}

function updateDesc(req, res) {
    // user who created the build on this page should also be the same owner of reviews
    Meal.findById(req.params.id, (err, meal)=> {
        if (!meal.user.equals(req.user._id)) return res.redirect(`/ingredients/${req.params.id}`);
        meal.desc = req.body.desc;

        meal.save(function(err) {
            if (err) console.log(err);
            res.redirect(`/ingredients/${req.params.id}`)
        })
    })
}