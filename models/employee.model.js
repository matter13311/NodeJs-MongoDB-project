const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String

    },
    Alcohol: {
        type: String

    },
    ingredients: {
        type: String

    },
    imageURL: {
        type: String
    }
});


mongoose.model('Employee', employeeSchema);