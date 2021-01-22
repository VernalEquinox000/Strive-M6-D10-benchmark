const express = require("express");
const cors  = require("cors")
const services = require("./services")

const {
  badRequestErrorHandler,
  notFoundErrorHandler,
  unauthorizedErrorHandler,
  forbiddenErrorHandler,
  catchAllErrorHandler,
} = require("./errorHandling");

const server = express();
server.use(express.json())

server.use("/api", services)

server.use(badRequestErrorHandler)
server.use(notFoundErrorHandler)
server.use(forbiddenErrorHandler)
server.use(unauthorizedErrorHandler)
server.use(catchAllErrorHandler)

server.use(cors())

const port = process.env.PORT || 5000;

server.listen(port,()=>{
    console.log('Server running on port', port )
});

server.on("error",(error)=>{
    console.error('Server not running!  ' + error )
});