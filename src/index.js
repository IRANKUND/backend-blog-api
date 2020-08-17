import express from 'express';
import route from './routes/contacts.js';


const PORT=process.env.PORT || 3000;

const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', route);


app.get('/',(req,res )=>{
    res.json({
        msg : 'welcome',
    });
})

app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`);
})