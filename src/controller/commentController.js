import comment from '../models/comment.json';



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
        id: comment.length + 1,
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

// export const modifyContact = (req, res ) =>{
//     const id=req.params.id;
//     const contac = contact.find((contac)=>{
//         return contac.id === id;
//     })
//     if(!contac) res.status(400).send("message not found");

//     contac.names= req.body.names,
//     contac.email= req.body.email,
//     contac.phone= req.body.phone,
//     contac.message= req.body.message
//     if(contact.length){
//         res.json({
//             coount: contact.length,
//             contact
//         })
//     }else{
//         res.send('error')
//     }
// }

// export const allContactsById= (req, res)=>{
//     const id=req.params.id;
//     const contac = contact.find((contac)=>{
//         return contac.id === id;
//     })
//     if(contac){
//         res.json({
//             contac
//         })
//     }else{
//         res.send('error')
//     }
// }


// export const deleteContact= (req, res)=>{
//     const id=req.params.id;
//     const contac = contact.find((contac)=>{
//         return contac.id === id;
//     })
//     if(!contac) res.status(400).send("message not found");
//     const index=contact.indexOf(contac);
//     contact.splice(index, 1);

//     if(contac){
//         res.json({
//             contac
//         })
//     }else{
//         res.send('error')
//     }
// }




