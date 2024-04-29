const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {type: String, required: true, minlength: 10, maxlength: 100},
    password: {type: String, required: true, minlength: 8, maxlength: 100},
})

const User = new mongoose.model('User', userSchema)

module.exports = User