const cors = require('cors')
const routes = require('./routes/routes')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors({"access-control-allow-origin": "*"}))

app.use(
    express.urlencoded({ 
        extend:true,
    })
)

app.use(express.json())
app.use(routes)

const profileRoutes = require('./routes/profileRoutes')

app.use('/profile', profileRoutes)



const USER_BD = 'VictorCosme'
const BD_PASSWORD = '1323qMDB'

mongoose.connect(`mongodb+srv://${USER_BD}:${BD_PASSWORD}@apicluster.1icwsn2.mongodb.net/?retryWrites=true&w=majority`)



.then(()=>{
    console.log("Conectado ao banco com sucesso!")
    app.listen(3000)
})

.catch((err)=> console.log(err))
