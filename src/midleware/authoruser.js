const router= require ('express');
const User=  require ('../models/users');
import {validateLogin , validateRegistration} from './validation';
import bycrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
require ('dotenv').config();




const SECRET_KEY=process.env.SECRET_KEY;




const route=router();

route.post('/register', async (req ,res)=>{

    const { error } = validateRegistration(req.body);
    if(error) return res.status(400).send(error.details[0].message);
        const emailExist= await User.findOne({email: req.body.email});
        if(emailExist) return res.status(400).send("email already exist"); 
        const  salt= await bycrypt.genSalt(10);
        const  hashedPasswoed= await bycrypt.hash(req.body.password, salt);

        const user=new User({
            name:req.body.name,
            email:req.body.email,
            password: hashedPasswoed,
            role: "user"
        });
        try{
            const savedUser= await user.save();
            res.send({user: user._id});
        }catch(err){
            res.status(400).send(err);
        }

});

route.post('/login', async (req ,res)=>{
    const { error } = validateLogin(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const user= await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send("email is wrong");
        const validPassword= await bycrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send("password is wrong");
          const token=jwt.sign({_id: user._id}, SECRET_KEY);
          res.header('auth-token', token).send(token);
        res.send("loged in");
        
})

export default route;

