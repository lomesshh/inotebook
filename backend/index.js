const connectToMongo = require('./db');
const express = require('express')
const path = require('path')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('/', (req, res) => {
      app.use(express.static(path.resolve(__dirname, 'client', 'build'))),
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`iNoteBook Backend Running at http://localhost:${port}`)
})

