import Message from '../models/message';
import { v4 as uuidv4 } from 'uuid';
import mongo from 'mongoose';



export const allContacts= (req, res)=>{
    
    Message.find()
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err =>{
        res.status(500).json({
            error: err
        })
    })
}

export const addcontacts = (req, res ) =>{
    const message= new Message({
        names:req.body.names,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })
    message.save().then(result =>{
        console.log(result);
        res.json({
            result
        })
    }).catch(err => {
        console.log(err);
    })
}



export const allContactsById= (req, res)=>{
    const id=req.params.id;
    Message.findById(id).exec().then(doc =>{
        console.log('data from database',doc);
        if(doc){
            res.status(200).json( doc);
        }else{
            res.status(404).json({message: 'No valid entry found for provided id'});
        }
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}


export const modifyContact = (req, res ) =>{
    const id=req.params.id;
    const updateOps={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Message.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result =>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}




export const deleteContact= (req, res)=>{
    const id=req.params.id;
    Message.remove({_id: id}).exec().then(result =>{
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}




