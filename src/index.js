import express from 'express';
import createError from 'http-errors';
require ('dotenv').config();
import bodyparser, { json } from 'body-parser';
import route from './routes/contacts.js';
import auth from './midleware/authoruser';
import postroute from './midleware/post';
import blogRoute from './controller/blogcontroller';
import jwt from 'jsonwebtoken';
import mongo from 'mongoose';




const PORT=process.env.PORT || 4000;

const DB_CONNECT=process.env.DB_CONNECT;


const app= express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongo.connect("mongodb+srv://patrick:123blog@blog-api.jg7ki.mongodb.net/blog-api?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } ,()=>{
   
    console.log("connectedd to DB")
});

app.use('/', route);
app.use('/', auth);
app.use('/', postroute);
app.use('/', blogRoute);
 
app.get('/', (req,res )=>{
   
            res.json({
                message: "Welcome",
                
            }) 
});





// function checktoken(req, res, next){
//     const bearerHeader= req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined' ){

//         const bearer =bearerHeader.split(' ');

//         const bearerToken=bearer[1];

//         req.token=bearerToken;

//         next();
//     }else{
//         res.sendStatus('403');
//     }

//}



app.use((req, res,next)=>{
    next(createError.NotFound());
})
app.use((error, req, res, next )=>{
    res.status= error.status || 404;
    res.send({status: error.status, message: error.message })
})


app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`);
});
export default app;