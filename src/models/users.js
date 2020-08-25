import { v4 as uuidv4 } from 'uuid';

let users=[
    {
     
       username: "Kayihura",
       email: "12pazzo@gmail.com",
       password: "patrick",
       role: "admin"
    },
    {
       
       username: "Irankunda",
       email: "12pazzo@gmail.com",
       password: "pazzoz",
       role: 'user'
     }
];
users = users.map((users) => ({ id: uuidv4(), ...users }));

export default users;