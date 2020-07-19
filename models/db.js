const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:nzEhSnN55kJ0qE4j@cluster0-aqc7w.mongodb.net/midterm?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true}, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


require('./employee.model');
//require('./recipe.model');

//mongodb+srv://user:nzEhSnN55kJ0qE4j@cluster0-aqc7w.mongodb.net/midterm?retryWrites=true&w=majority
//mongodb://localhost:27017/Take2DB