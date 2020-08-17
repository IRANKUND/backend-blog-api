import user from '../models/users.json';

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
        id: user.length + 1,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
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