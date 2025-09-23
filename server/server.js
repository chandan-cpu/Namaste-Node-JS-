const express=require('express');

const app=express();

app.use(express.json());

// it only print the / data only after any routes
// app.use('/',(req,res)=>{
//     res.send('Hello World');
// });

// app.use('/test',(req,res)=>{
//     res.send('This is a test route');
// });
// it only print the /test data only after any routes
app.use('/test',(req,res)=>{
    res.send('This is a test route');
});


app.use('/',(req,res)=>{
    res.send('Hello World');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})