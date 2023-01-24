const mongoose = require('mongoose')
const Schema = mongoose.Schema


const usersSchema = new Schema({
    first_name : {type : String, required : true},
    last_name : String,
    age : Number,
    date : {type : Date, default: Date.now()}
})


module.exports = mongoose.model('Users', usersSchema, 'newDB')