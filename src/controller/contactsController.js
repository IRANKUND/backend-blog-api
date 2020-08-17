import contact from '../models/contact.json';
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


console.log(contact);

export const allContacts= (req, res)=>{
    if(contact.length){
        res.json({
            coount: contact.length,
            contact
        })
    }else{
        res.send('error')
    }
}

export const addcontacts = (req, res ) =>{
    const conta= {
        id: contact.length + 1,
        names:req.body.names,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    };
    contact.push(conta);
    if(contact.length){
        res.json({
            coount: contact.length,
            contact
        })
    }else{
        res.send('error')
    }
}

export const modifyContact = (req, res ) =>{
    const id=req.params.id;
    const contac = contact.find((contac)=>{
        return contac.id === id;
    })
    if(!contac) res.status(400).send("message not found");

    contac.names= req.body.names,
    contac.email= req.body.email,
    contac.phone= req.body.phone,
    contac.message= req.body.message
    if(contact.length){
        res.json({
            coount: contact.length,
            contact
        })
    }else{
        res.send('error')
    }
}

export const allContactsById= (req, res)=>{
    const id=req.params.id;
    const contac = contact.find((contac)=>{
        return contac.id === id;
    })
    if(contac){
        res.json({
            contac
        })
    }else{
        res.send('error')
    }
}


export const deleteContact= (req, res)=>{
    const id=req.params.id;
    const contac = contact.find((contac)=>{
        return contac.id === id;
    })
    if(!contac) res.status(400).send("message not found");
    const index=contact.indexOf(contac);
    contact.splice(index, 1);

    if(contac){
        res.json({
            contac
        })
    }else{
        res.send('error')
    }
}




