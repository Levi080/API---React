const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const routes = require('./src/routes')

const app = express()

//#region Inicializando o banco de dados.
const DataBase = require('./src/db/configs'); 
DataBase.start();
//#endregion 


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3003, function()
{
    console.log("Servidor iniciou com sucesso!")
})