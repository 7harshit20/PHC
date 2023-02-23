const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Doctor } = require('../model/Doctor');
const { Patient } = require('../model/Patient')

// router.get('/', auth, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         return res.send(user);
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).send('Something went wrong');
//     }
// })

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const actors = [Doctor, null, null, Patient]
    console.log(req.body.role);
    const Curr = actors[req.body.role - 1];
    console.log(Curr);
    if (Curr != Doctor && Curr != Patient) return res.status(500).send('No func of adding patient');
    const { error } = Joi.object({
        role: Joi.number(),
        email: Joi.string().email().required(),
        password: Joi.string().max(30).required()
    }).validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const user = await Curr.findOne({ email })
        if (!user || !await bcrypt.compare(password, user.password)) return res.status(400).send('Invalid user name or password');


        res.send('Logged in');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Something went wrong');
    }
});

// router.delete('/', auth, async (req, res) => {
//     res.clearCookie('token');
//     res.send('Logout');
// })

module.exports = router