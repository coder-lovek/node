const express = require('express');
const router = express.Router();
const Person = require('../models/Person'); // Import the Person model

// GET request to fetch a pirate object
router.get('/', function (req, res) {
    var pirate = {
        name: "luffy",
        age: 19,
        rank: "yonko"
    };
    res.send(pirate);
});

// POST request to create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const savedPerson = await newPerson.save();
        console.log("success");
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log("failure");
        res.status(500).json({ error: 'internal error' });
    }
});

module.exports = router;
