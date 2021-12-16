const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');
const Build = require('../models/build');

module.exports = {
    index,
    createPasta,
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
    Pasta.findById(req.params.id, (err, pasta)=> {
        // req.body.user = req.user._id;
        req.body.pasta = pasta 

        build.pasta.push(req.body);


    })
}
