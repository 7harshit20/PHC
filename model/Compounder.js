const mongoose = require('mongoose');
const Joi = require('joi');

const compounderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    degree: {
        type: String,
    },
    birth: {
        type: Date,
    },
    gender: {
        type: String,
    },
    employedment_details: {
        type: String,
    },
    timing: {
        type: [[[Number]]],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const validatecompounder = compounder => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
        phone: Joi.string().length(10),
        degree: Joi.string(),
        birth: Joi.date(),
        gender: Joi.string(),
        employedment_details: Joi.string(),
        timing: Joi.array().length(7).items(Joi.array().length(2).items(Joi.array().length(2).items(Joi.number().max(61)))),
    });
    return schema.validate(compounder);
}

// const validatePassword = password => {
//     const schema = new passwordValidator();
//     schema
//         .has().uppercase(1, 'The password should have a minimum of 1 uppercase letter')
//         .has().lowercase(1, 'The password should have a minimum of 1 lowercase letter')
//         .has().digits(1, 'The password should have a minimum of 1 digit');
//     return schema.validate(password, { details: true });
// }

module.exports = {
    Compounder: mongoose.model('compounder', compounderSchema),
    validatecompounder,
}