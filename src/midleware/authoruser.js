const router= require ('express');
const User=  require ('../models/users');
import {validateLogin , validateRegistration} from './validation';
import bycrypt  from 'bcryptjs';




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
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }

});

export default route;

