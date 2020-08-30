import jwt from 'jsonwebtoken';
require ('dotenv').config();
const SECRET_KEY=process.env.SECRET_KEY;

module.exports = function (req, res, next) {
    const token = req.header('authorization');
    if(!token) return res.status(401).send('access denied');
    try{
        const verified= jwt.verify(token, SECRET_KEY);
        req.user =verified;
        next();
    }catch(err){
        res.status(400).send('invalid token');
    }
};