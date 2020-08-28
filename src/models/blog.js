import mongoo from 'mongoose';

const blogSchema= mongoo.Schema({
    
   author: String,
   email: String,
   title: String,
   content: String
    
});

module.exports = mongoo.model('blog', blogSchema);
