const cors = require('cors')
const routes = require('./routes/routes')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())

app.use(
    express.urlencoded({ 
        extend:true,
    })
)

app.use(express.json())
app.use(routes)

const profileRoutes = require('./routes/profileRoutes')

app.use('/profile', profileRoutes)


/*
const USER_BD = process.env.USER_BD
const BD_PASSWORD = encodeURIComponent(process.env.BD_PASSWORD)
*/

mongoose.connect(`mongodb+srv://VictorCosme:1323qMDB@apicluster.1icwsn2.mongodb.net/?retryWrites=true&w=majority`)



.then(()=>{
    console.log("Conectado ao banco com sucesso!")
    app.listen(3000)
})

.catch((err)=> console.log(err))
