
import { v4 as uuidv4 } from 'uuid';
let comment =[
    {
       
       blodId: "1",
       name: "Irankunda patrick",
       email: "12pazzo@gmail.com",
       content: "can we talk"
    },
    {
       
       blodId: "1",
       name: "Irankunda patrick",
       email: "12pazzo@gmail.com",
       content: "can we talk"
     }
];
comment = comment.map((comment) => ({ id: uuidv4(), ...comment }));
export default comment;