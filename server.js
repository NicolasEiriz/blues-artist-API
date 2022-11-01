const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors()) 

//create an object with the blues artist
let bluesArtist = {

  'bb king':{
    'birthName': 'Riley B. King',
    'born': 'September 16, 1925',
    'instruments': 'Guitar-vocals',
    'yearsActive':	'1942-2014',
    'genres': 'Electric blues[1]rhythm and blues[2]rock and roll[2]soul[3]gospel[4]'
  },

  'muddy water': {
    'birthName': 'McKinley Morganfield',
    'born': 'April 4, 1913 or 1915 (disputed)',
    'instruments': 'Vocals-guitar-harmonica',
    'yearsActive':	'1941-1982',
    'genres': 'BluesChicago bluesDelta blues'
  },

  'unknown':{
    'info': 'not upload yet'
  }
}

//handle a GET request with the get method and respond with an html file


app.get('/', (request, response) =>{
  response.sendFile(__dirname + '/index.html')
  
})

//set up the server to listen the browser

app.get('/api/bluesArtist/:artistName', (request, response)=>{

//if the artist name actually exist in my database give their respective information

  

  const artistName = request.params.artistName.toLowerCase()
  if(bluesArtist[artistName]){

  response.json(bluesArtist[artistName])}

  else{
    response.json(bluesArtist['unknown'])
  }
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})

