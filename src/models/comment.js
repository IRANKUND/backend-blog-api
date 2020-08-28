import mongoo from 'mongoose';

const commentSchema= mongoo.Schema({
   
       blodId: String,
       name: String,
       email: String,
       content: String
});

module.exports = mongoo.model('comment', commentSchema);
   