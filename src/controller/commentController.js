import Comment from '../models/comment';
import Blog from '../models/blog';


export const allComment= (req, res)=>{
    Comment.find()
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

export const addcomments = (req, res ) =>{
          
         const id =req.params.id;
        const blog= Blog.findOne({_id: id});
        if(blog){
            comment= new Comment({
            blodId: id,
            name: req.body.name,
            email: req.body.email,
            content: req.body.content
        })
        comment.save().then(result =>{
         
            res.json({
                result
            })
        }).catch(err => {
            console.log(err);
        })}else{
            res.send("no blog found");
        }
            
      
}

export const modifyComment = (req, res ) =>{
    const id=req.params.id;
    const updateOps={};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Comment.update({_id: id}, {$set: updateOps})
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

export const commentsById= (req, res)=>{
    const id=req.params.id;
    Comment.findById(id).exec().then(doc =>{
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


export const deletecomement= (req, res)=>{
    const id=req.params.id;
    Comment.remove({_id: id}).exec().then(result =>{
        res.status(200).json(result);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}




