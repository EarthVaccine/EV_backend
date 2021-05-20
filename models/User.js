const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required:true, 
        unique:true
    }
});

var User = mongoose.model('users', userSchema);
module.exports = User;
