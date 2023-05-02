const express=require('express');

const productController=require("../controller/product_con");

const router=express.Router();


////Create Rest API using POST /products  
////This is always sent by user. We can chech by postman in POST body and select raw and JSON and add new object with id 31 in products.
router
////Create Rest API using POST /products
.post('/', productController.create)

////Read Rest API using GET /products
.get('/', productController.getAll)
////Read Rest API using GET /products:id
.get('/:id', productController.get)

////UPDATE Rest API using PUT /products:id
////To check go to postman select PUT body and select raw and JSON and add new object and link localhost:8080/products/1. This will update which id=1
.put('/:id', productController.replace)

////UPDATE Rest API using PATCH /products:id
////Same as PUT but it will only update what we change else all is same.
.patch('/:id', productController.update)

////DELETE Rest API using DELETE /products:id
////To check go to postman select DELETE body and select raw and JSON and add new object and link localhost:8080/products/1. This will delete which id=1
.delete('/:id', productController.delete)


exports.router=router;