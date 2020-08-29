import mongo, { model } from 'mongoose';

const userSchema= mongo.Schema({
   name:{
      type: String,
      required: true,
      min: 6,
      max: 255,

   }, 
   email: {
      type: String,
      required: true,
      min: 6,
      max: 255,

   },
   password: {
      type: String,
      required: true,
      min: 6,
      max: 1204,

   },
   role: String,
   date: {
      type: Date,
      default: Date.now
   }
})

module.exports= mongo.model('user', userSchema)
