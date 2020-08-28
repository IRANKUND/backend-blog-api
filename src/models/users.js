import mongo, { model } from 'mongoose';

const userSchema= mongo.Schema({
   name: String,
   email: String,
   password: String,
   role: String
})

module.exports= mongo.model('user', userSchema)
