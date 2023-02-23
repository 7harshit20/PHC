const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb+srv://7harshit20:7harshit20@cluster0.dmj0hpt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to database');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

