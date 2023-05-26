const express= require('express');
const app=express();
const cors=require('cors');
const port =process.env.PORT|| 5000;

const teddyBear=require('./data/tedy.json');
const horse=require('./data/horse.json');

app.use(cors());
app.use(cors());
app.get('/',(req,res)=>{

    res.send('hello');

});

app.get('/teddyBear',(req,res)=>{
    res.send(teddyBear);
})
app.get('/horse',(req,res)=>{
    res.send(horse);
})

app.listen(port,()=>{
    console.log(`port : ${port}`);
})