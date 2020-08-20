import express from 'express';
import jwt from 'jsonwebtoken';
import {} from  'dotenv/config';

const {SECRET_KEY} = process.env;
const route= express.Router();

route.post('/signUp', async (req, res)=>{
   const {name, email}=req.body;
    try{
      const token=  jwt.sign({name, email}, SECRET_KEY);
        res.send(token);
    }catch(err){
        new error(err);
        res.send(err);
    }
     
});
route.post('/login', (req, res)=>{
    const {name, email}=req.body;
    const token=  jwt.sign({name, email}, SECRET_KEY);
        res.send(token);
    res.json({
        user: '',
    })
})

export default route;
