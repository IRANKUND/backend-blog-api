import express from 'express';
import Blog from '../models/blog';
import Message from  '../models/message';
import verify from '../midleware/verifyToken';
const User=  require ('../models/users');
import {validateblog } from '../midleware/validation';
import mongo from 'mongoose';


const route = express();

export const allBlogs= async (req, res ) => {
    
    const user   = await  User.findOne({_id: req.user});
    
    if(user){
    Blog.find()
    .exec()
    .then(doc =>{
        res.status(200).json(doc);
    }).catch(err =>{
        res.status(500).json({
            error: err
        })
    })}
    else{
        res.send('access denied');
    }
};


 export const  addBlogs = async (req, res ) => {
    
    const user   = await User.findOne({_id: req.user});
    const role = user.role;
    
   
    if(role === "admin"){
        const { error } = validateblog(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const blog= new Blog({
            author: user.name,
            email: user.email,
            title: req.body.title,
            content: req.body.content
        });
        blog.save().then(result =>{
            
            res.json({
                result
            })
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
    }else{
        res.send('you are not admin');
    }
    
   
};

export const  modifyBlog = async (req, res ) => {
    
    const user   = await User.findOne({_id: req.user});
    const role = user.role;
    
    const id=req.params.id;
    const updateOps={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    if(role === "admin"){
    Blog.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result =>{
        
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}else{
    res.send('you are not admin');
}
};

export const allBlogById= async (req, res ) => {


    const user   = await User.findOne({_id: req.user});
    
    if(user){
    const id=req.params.id;
    Blog.findById(id).exec().then(doc =>{
        console.log('data from database',doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: 'No valid entry found for provided id'});
        }
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })}else{
      res.send("access denied");
    }
};


export const deleteBlog = async (req, res ) => {
    const user   = await User.findOne({_id: req.user});
    const role = user.role;
    const id=req.params.id;

    if(role === "admin"){
    Blog.remove({_id: id}).exec().then(result =>{
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })}else{
        res.send('you are not admin');
    }
};
route.delete('/api/contacts/:id', verify, async (req, res ) => {
    const user   = await User.findOne({_id: req.user});
    const role = user.role;
    const id=req.params.id;

    if(role === "admin"){
        Message.remove({_id: id}).exec().then(result =>{
            res.status(200).json(result);
        }).catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            })
        
    })}else{
        res.send('you are not admin');
    }
});


route.get('/api/contacts',  verify, async (req, res ) => {
    
    const user   = await User.findOne({_id: req.user});
    const role = user.role;
    if(role === "admin"){
        Message.find()
        .exec()
        .then(doc =>{
            res.status(200).json(doc);
        }).catch(err =>{
            res.status(500).json({
                error: err
            })
        })}
    else{
        res.send('you are not admin');
    }
});

export default route;