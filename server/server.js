const express=require('express');

const app=express();

app.use(express.json());



app.use('/',(req,res,next)=>{
    next();
    res.send('Hello World');
},
(req,res)=>{
    res.send('Hello from second middleware');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})