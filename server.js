const express = require('express') //use express
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://vake:Luj45@cluster0.socyvio.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true})
  .then(client =>{
    console.log('Connected to Database')
    const db = client.db('blues_api')
    const artistCollection = db.collection('artist')

    //tell express we use EJS template engine
    app.set('view engine', 'ejs')
    
    app.use(bodyParser.json())

    app.put('/artist', (req, res)=>{
      artistCollection.findOneAndUpdate(
        { stageName: 'BB king'},
        {
          $set:{
            stageName: req.body.stageName,
            birthName: req.body.birthName
          }
        },
        {
          upsert: true
        })
        
        .then(result => {
          res.json('Success')
        })
        
        .catch(error => console.error(error))
    })

    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(express.static('public')) //tell express to make public's folder accessible
    
     
    
    app.get('/', (req, res) =>{ //handle a GET request
      db.collection('artist').find().toArray()
      .then(results =>{
        res.render('index.ejs', {artist: results})
      })
      .catch(error => console.error(error))
    }) //serve an html file
      
      app.post('/artist', (req, res)=>{
        artistCollection.insertOne(req.body)
        .then(result =>{
          res.redirect('/')
        })
        .catch(error=> console.error(error))
      })

      app.delete('/artist', (req,res)=>{
        artistCollection.deleteOne(
          {stageName: 'Blues Albums'} 
        )
        .then(result=>{
          res.json('Deleted Blues Album')
        })
        .catch(error => console.log(error))
      })
 

 app.listen(3000, () =>{
  console.log('listening on 3000');
})
}) 

   