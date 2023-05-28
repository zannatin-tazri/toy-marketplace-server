const express= require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app=express();
const cors=require('cors');
const port =process.env.PORT|| 5000;

const teddyBear=require('./data/tedy.json');
const horse=require('./data/horse.json');
const dinosaur=require('./data/dinosaur.json');
const allToys=require('./data/allToys.json');

app.use(cors());
app.use(cors());
app.use(cors());

app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3moahdm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try { 
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const dinosaurData=client.db('toyMarketplace').collection('toys');

    app.get('/toys',async(req,res)=>{
        const cursor=dinosaurData.find();
        const result=await cursor.toArray();
        res.send(result);
    })
    const teddyData=client.db('toyMarketplaceData2').collection('teddy');

    app.get('/teddy',async(req,res)=>{
        const cursor=teddyData.find();
        const result=await cursor.toArray();
        res.send(result);
    })
    const allToyData=client.db('AllToys').collection('allToys');

    app.get('/allToys',async(req,res)=>{
        const cursor=allToyData.find();
        const result=await cursor.toArray();
        res.send(result);
    })
    const horseData=client.db('toyMarketplaceData3').collection('horse');

    app.get('/horse',async(req,res)=>{
        const cursor=horseData.find();
        const result=await cursor.toArray();
        res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send('hello');
});

// app.get('/allToys',(req,res)=>{
//   res.send(allToys);
// })

// app.get('/teddyBear',(req,res)=>{
//     res.send(teddyBear);
// })
// app.get('/horse',(req,res)=>{
//     res.send(horse);
// })
// app.get('/dinosaur',(req,res)=>{
//     res.send(dinosaur);
// })

app.listen(port,()=>{
    console.log(`port : ${port}`);
})