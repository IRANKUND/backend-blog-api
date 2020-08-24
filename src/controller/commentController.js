import comment from '../models/comment';
import { v4 as uuidv4 } from 'uuid';


export const allComment= (req, res)=>{
    if(comment.length){
        res.json({
            coount: comment.length,
            comment
        })
    }else{
        res.send('error')
    }
}

export const addcomments = (req, res ) =>{
    const blo= {
        id: uuidv4(),
        blodId: req.body.blodId,
        name: req.body.name,
        email: req.body.email,
        content: req.body.content
    };
    comment.push(blo);
    if(comment.length){
        res.json({
            coount: comment.length,
            comment
        })
    }else{
        res.send('error')
    }
}

export const modifyComment = (req, res ) =>{
    const id=req.params.id;
    const comments = comment.find((comments)=>{
        return comments.id === id;
    })
    if(!comments) res.status(400).send("message not found");

    comments.blodId= req.body.blodId,
    comments.name= req.body.name,
    comments.email= req.body.email,
    comments.content= req.body.content
    


    if(comments.length){
        res.json({
            coount: comment.length,
            comment
        })
    }else{
        res.send('error')
    }
}

export const commentsById= (req, res)=>{
    const id=req.params.id;
    const comments = comment.find((comments)=>{
        return comments.id === id;
    })
    if(comments){
        res.json({
            comments
        })
    }else{
        res.send('error')
    }
}


export const deletecomement= (req, res)=>{
    const id=req.params.id;
    const comments = comment.find((comments)=>{
        return comments.id === id;
    })
    if(!comments) res.status(400).send("message not found");
    const index=comment.indexOf(contac);
    comment.splice(index, 1);

    if(comments){
        res.json({
            comments
        })
    }else{
        res.send('error')
    }
}




