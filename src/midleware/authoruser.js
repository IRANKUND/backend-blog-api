import express from 'express';
import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';
import {createError} from 'http-errors';

const {SECRET_KEY} = process.env;
const app=express();
app.post('/api/login', (req, res)=>{
    const user={
        id: 1,
        name: "pazz",
        email: "pazzo@gmail.com"
    }
    jwt.sign({user},SECRET_KEY , (err, token)=>{
        res.json({
            token
        })
    } )
    
} );

export const checkUser=(req, res, next)=>{
    const bearerHeader= req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined' ){

        const bearer =bearerHeader.split(' ');

        const bearerToken=bearer[1];

        req.token=bearerToken;

        next();
    }else{
        res.sendStatus('403');
    }

}
export default app;