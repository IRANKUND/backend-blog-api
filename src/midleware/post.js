const router= require ('express');
import verify from './verifyToken';
const User=  require ('../models/users');

const route=router();

route.get('/api/post', verify, async (req, res,)=>{
 const user   = await User.findOne({_id: req.user});
 const role = user.role;
 
 
})



export default route;