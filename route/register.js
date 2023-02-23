const express = require('express');
const { Patient, validatePatient } = require('../model/Patient')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, name, roll_number, phone, gender } = req.body;

        const { error } = validatePatient(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        if (await Patient.findOne({ email }) !== null) return res.status(401).send('Email already exist');

        let patient = new Patient({ name, email, roll_number, phone, gender });
        await patient.save();

        res.status(200).send('Registered');

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Something went wrong');
    }

})

module.exports = router;