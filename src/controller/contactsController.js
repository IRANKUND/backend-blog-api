import contact from '../models/contact.json';

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

export const allContactsById= (req, res)=>{
    const id=req.params.id;
    const contac = contact.filter((contac)=>{
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