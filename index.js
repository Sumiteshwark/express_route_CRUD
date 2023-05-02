
const express=require('express');
const server=express();
const productRouter=require("./routes/product_rou");
const userRouter=require("./routes/users_rou");


//MIddleWare
server.use(express.json());  ////use of read json file send from body in postman.  Before we use it as bodyParser.
// server.use(express.urlencoded());
// server.use(express.static('public'));  ////Make file in static folder and write file index.html to default start.

server.use('/products',productRouter.router);  //every link starts with /api/ (i.e. localhost:8080/products/)
server.use('/users',userRouter.router);  //every link starts with /api/ (i.e. localhost:8080/products/)


server.listen(8080, ()=>{
    console.log('server started');
});