const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const Portofolio = require('../models/Portofolio');

//Get
router.get('/', async (req, res) => {
    const portofolios = await Portofolio.find();

    res.json(portofolios);
});

//post
router.post('/new', async (req, res) => {
    const newPortofolio = new Portofolio(req.body);

    const savedPortofolio = await newPortofolio.save();

    res.send(savedPortofolio);
});

//get specific
router.get('/:id', async (req, res) => {
    const findPortofolio = await Portofolio.findById({ _id: req.params.id });

    res.json(findPortofolio);
});

//update
router.patch('/update/:id', async (req, res) => {
    const updatePortofolio = await Portofolio.updateOne({ _id: req.params.id }, { $set: req.body })

    res.json(updatePortofolio);

});

//delete
router.delete('/delete/:id', async (req, res) => {
    const delPortofolio = await Portofolio.findByIdAndDelete({ _id: req.params.id });

    res.json(delPortofolio);
});

module.exports = router;