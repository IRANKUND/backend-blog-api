import blog from '../models/blog';

export const allBlogs= (req, res)=>{
    if(blog.length){
        res.json({
            coount: blog.length,
            blog
        })
    }else{
        res.send('error')
    }
}


export const addBlog = (req, res ) =>{
    const blo= {
        id: blog.length + 1,
        author:req.body.author,
        email:req.body.email,
        title:req.body.title,
        content:req.body.content
    };
    blog.push(blo);
    if(blog.length){
        res.json({
            coount: blog.length,
            blog
        })
    }else{
        res.send('error')
    }
}

export const modifyBlog = (req, res ) =>{
    const id=req.params.id;
    const blogs = blog.find((blogs)=>{
        return blogs.id === id;
    })
    if(!blogs) res.status(400).send("message not found");

    blogs.author=req.body.author,
    blogs.email=req.body.email,
    blogs.title=req.body.title,
    blogs.content=req.body.content
    if(blog.length){
        res.json({
            coount: blog.length,
            blog
        })
    }else{
        res.send('error')
    }
}

export const allBlogById= (req, res)=>{
    const id=req.params.id;
    const blogs = blog.find((blogs)=>{
        return blogs.id === id;
    })
    if(blogs){
        res.json({
            blogs
        })
    }else{
        res.send('error')
    }
}


export const deleteBlog= (req, res)=>{
    const id=req.params.id;
    const blogs = blog.find((blogs)=>{
        return blogs.id === id;
    })
    if(!blogs) res.status(400).send("message not found");
    const index=blog.indexOf(blogs);
    blog.splice(index, 1);

    if(blogs){
        res.json({
            blogs
        })
    }else{
        res.send('error')
    }
}