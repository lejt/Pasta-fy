// load env
require('dotenv').config();
// connect to DB
require('./config/database');
// require our Models
const Pasta = require('./models/pasta');
const Sauce = require('./models/sauce');
const Vege = require('./models/vege');
const Protein = require('./models/protein');
const Meal = require('./models/meal');
// require the data
const data = require('./data');

const p1 = Pasta.deleteMany({});
const p2 = Sauce.deleteMany({});
const p3 = Vege.deleteMany({});
const p4 = Protein.deleteMany({});
const p5 = Meal.deleteMany({});

Promise.all([p1, p2, p3, p4, p5])
.then(function(results) {
    console.log(results);
    return Pasta.create(data.pastas);
}).then(function(pastas) {
    // console.log(pastas);
    return Sauce.create(data.sauces);
}).then(function(sauces) {
    // console.log(sauces);
    return Vege.create(data.veges);
}).then(function(veges) {
    // console.log(veges);
    return Protein.create(data.proteins);
}).then(function(proteins) {
    // console.log(proteins);
    return Meal.create(data.meals);
}).then(function(meals) {
    // console.log(meals);
}).then(function() {
    process.exit();
})