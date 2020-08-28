import Blog from '../models/blog';
import mongo from 'mongoose';

export const allBlogs= (req, res)=>{
    Blog.find()
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


export const addBlog = (req, res ) =>{
    const blog= new Blog({
        author: req.body.author,
        email: req.body.email,
        title: req.body.title,
        content: req.body.content
    })
    blog.save().then(result =>{
        console.log(result);
        res.json({
            result
        })
    }).catch(err => {
        console.log(err);
    })
}

export const modifyBlog = (req, res ) =>{
    const id=req.params.id;
    const updateOps={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Blog.update({_id: id}, {$set: updateOps})
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

export const allBlogById= (req, res)=>{
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
    })
}


export const deleteBlog= (req, res)=>{
    
    const id=req.params.id;
    Blog.remove({_id: id}).exec().then(result =>{
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}