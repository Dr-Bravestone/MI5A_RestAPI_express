// 1. define module
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config')

// 6. bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

// import routes
const fakultasRoutes = require('./routes/Fakultas')
const prodiRoutes = require('./routes/Prodi')
const dosenRoutes = require('./routes/Dosen')
const mahasiswaRoutes = require('./routes/Mahasiswa')


// 8. put routes in express
app.use('/fakultas', fakultasRoutes)
app.use('/prodi', prodiRoutes)
app.use('/dosen', dosenRoutes)
app.use('/mahasiswa', mahasiswaRoutes)

// 3. connect to database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true
})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

// if success
db.once('open', () =>{
    console.log('database is connected');
})
// 2. listen port
app.listen(process.env.PORT, () => {
    console.log(`server pada http://localhost:${process.env.PORT}`);
})