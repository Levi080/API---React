const express = require('express');
const ProductController = require('./Controllers/ProductController');

const routes = express.Router(); 

routes.get('/', function(req,res){
    res.json({message: "Servidor01 está on..."})
})

routes.post('/products', ProductController.CreateProduct);
routes.get('/products', ProductController.GetAllProducts);
routes.get('/products/:id', ProductController.GetProduct);
routes.put('/products/:id', ProductController.UpdateProduct);
routes.delete('/products/:id', ProductController.RemoveProduct);

module.exports = routes;