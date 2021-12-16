const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');

module.exports = {
    index,
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