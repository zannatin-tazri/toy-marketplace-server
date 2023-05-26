const express= require('express');
const app=express();
const cors=require('cors');
const port =process.env.PORT|| 5000;

const teddyBear=require('./data/tedy.json');

app.use(cors());
app.get('/',(req,res)=>{

    res.send('hello');

});

app.get('/teddyBear',(req,res)=>{
    res.send(teddyBear);
})

app.listen(port,()=>{
    console.log(`port : ${port}`);
})