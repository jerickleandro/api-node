'use strict'

const express = require('express');
const http = require('http');
const debug = require('debug')('nodeapi:server')

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next)=>{
    res.stats(200).send({
        title: "API CREATED",
        versio: "0.0.1"        
    });
});
app.use('/', route);

server.listen(port);
console.log("API Working!");

function normalizePort(val){
    const port = parseInt(val, 10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}