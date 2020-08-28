const router= require ('express');
const User=  require ('../models/users');

const route=router();

route.post('/register', async (req ,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role: "admin"
    });
    try{
        const savedUser= await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
})

export default route;

