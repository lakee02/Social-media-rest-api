const express=require('express');
const mongoose=require('mongoose');
const router = require('./routes/user-routes');
const blogrouter = require('./routes/blog-routes');
const app=express();

app.use(express.json());
app.use('/api/user',router);
app.use('/api/blog',blogrouter)

mongoose.connect(
    'mongodb+srv://admin:admin123@cluster0.xivwlwr.mongodb.net/Blog?retryWrites=true&w=majority'
)
.then(()=>app.listen(5000))
.then(()=>
console.log("Connect to database and running port on 5000")
)
.catch((err)=>console.log(err));