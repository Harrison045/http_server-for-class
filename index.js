const express = require('express')
const server =  express()
const routes = require('./routes/routes')

server.use('/',routes)

server.listen(4000,()=>console.log('server started'))