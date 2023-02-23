const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { Doctor } = require('../model/Doctor');

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

    const { error } = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().max(30).required()
    }).validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const doctor = await Doctor.findOne({ email })
        if (!doctor || !await bcrypt.compare(password, doctor.password)) return res.status(400).send('Invalid user name or password');


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