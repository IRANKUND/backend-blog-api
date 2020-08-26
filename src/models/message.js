import mongoo from 'mongoose';

const meassageSchema= mongoo.Schema({
    
    names: String,
    email: String,
    phone: String,
    message: String

});

module.exports = mongoo.model('message', meassageSchema);
