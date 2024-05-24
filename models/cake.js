const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;
