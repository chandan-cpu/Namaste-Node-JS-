const express=require('express');

const app=express();

const {adminAuth,userAuth}=require('./middlewares/auth');

app.use(express.json());

app.use('/admin', adminAuth);

app.get('/login',(req,res)=>{
    
    res.send('Admin Login Page');
});

app.get('/user', userAuth, (req, res) => {
    res.send('User Profile Page');
});

app.get('/getallusers',(req,res)=>{
    // const token="xyz";
    // const isVerify=token==="xyz";

    // if(!isVerify){
    //     return res.status(401).send('Unauthorized');
    // }
    res.send('Get all users');
})

app.get('/deleteuser',(req,res)=>{
    // const token="xyzm";
    // const isVerify=token==="xyz";

    // if(!isVerify){
    //     return res.status(401).send('Unauthorized');
    // }
    res.send('Delete user');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})