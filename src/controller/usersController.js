import user from '../models/users';
import { v4 as uuidv4 } from 'uuid';

export const allUsers= (req, res)=>{
    if(user.length){
        res.json({
            coount: user.length,
            user
        })
    }else{
        res.send('error')
    }
}

export const allUsersById= (req, res)=>{
    const id=req.params.id;
    const users = user.find((users)=>{
        return users.id === id;
    })
    if(users){
        res.json({
            users
        })
    }else{
        res.send('error')
    }
}

export const addUsers = (req, res ) =>{
    const users= {
        id: uuidv4(),
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        role: "user"
    };
    user.push(users);
    if(user.length){
        res.json({
            coount: user.length,
            user
        })
    }else{
        res.send('error')
    }
}


export const modifyUsers = (req, res ) =>{
    const id=req.params.id;
    const users = user.find((users)=>{
        return users.id === id;
    })
    if(!users) res.status(400).send("message not found");

    users.username= req.body.username,
    users.email= req.body.email,
    users.password= req.body.password
    if(user.length){
        res.json({
            coount: user.length,
            user
        })
    }else{
        res.send('error')
    }
}

export const deleteUser= (req, res)=>{
    const id=req.params.id;
    const users = user.find((users)=>{
        return users.id === id;
    })
    if(!users) res.status(400).send("user not found");
    const index=user.indexOf(users);
    user.splice(index, 1);

    if(users){
        res.json({
            users
        })
    }else{
        res.send('error')
    }
}