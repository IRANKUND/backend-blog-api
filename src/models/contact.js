import { v4 as uuidv4 } from 'uuid';
let  contacts=  [
    {
       
       names: "Irankunda ",
       email: "12pazzo@gmail.com",
       phone: "0788362377",
       message: "can we talk"
    },
    {
        
        names: "Kazungu Clever",
        email: "12Kazungu@gmail.com",
        phone: "0788362377",
        message: "can we talk"
     }
];
contacts = contacts.map((contacts) => ({ id: uuidv4(), ...contacts }));
export default contacts;

