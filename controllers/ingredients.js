const Pasta = require('../models/pasta');
const Sauce = require('../models/sauce');
const Vege = require('../models/vege');
const Protein = require('../models/protein');

module.exports = {
    index,
}

async function index(req, res) {
    res.render("ingredients/index");
}