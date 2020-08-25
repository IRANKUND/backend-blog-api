
import { v4 as uuidv4 } from 'uuid';


let blog =[
    {
    
       author: "Irankunda patrick",
       email: "12pazzo@gmail.com",
       title: "together As one",
       content: "can we talk"
    },
    {
    
        author: "Maxime Ishimwe",
        email: "12max@gmail.com",
        title: "Why js is good",
        content: "we can create many kind of app"
     }
];
blog = blog.map((blog) => ({ id: uuidv4(), ...blog }));

export default blog;