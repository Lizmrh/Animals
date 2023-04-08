const express = require('express');
const router = express.Router();

const {animals} = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myAnimals = await animals.find({});
        console.log(myAnimals);
        res.render('animals/index.ejs', {animals: myAnimals})
        // res.send('hello world')
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/new', (req, res) => {
    res.render('animals/new.ejs')
})

router.get('/:id', async (req, res, next) => {
    try {
        const myAnimal = await animals.findById(req.params.id);
        console.log(myAnimal);
        res.render('animals/show', {animal: myAnimal})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('', async (req, res, next) => {
    try {
        const newAnimal = await animals.create(req.body);
        console.log(newAnimal);
        res.redirect('/animals')
    } catch(err) {
        console.log(err);
        next();
    }
})





module.exports = router;