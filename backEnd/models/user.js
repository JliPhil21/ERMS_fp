let mongoose = require('mongoose');



// User Schema
const User = mongoose.model('User', {
    username: {
        type: String,
        required:true
    }, 
    password: {
        type:String,
        required:true
    }
});

module.exports = {User}