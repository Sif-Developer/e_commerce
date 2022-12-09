const express = require('express');
const { getProductByName } = require('../controllers/ProductController');
const router = express.Router();
const ProductController = require('../controllers/ProductController')
// const ImageController = require('../controllers/ImageController')
// const imageUploader = require('../helpers/image-uploader')


// $ sequelize model:generate --name Products --attributes name:string,price:integer,description:string, Cat
// egoryId:integer
router.post('/createProduct',ProductController.createProduct)
router.put('/updateProductById/:id', ProductController.updateProductById)
router.delete('/deleteProductById/:id', ProductController.deleteProductById)
router.get('/getProductById/:id', ProductController.getProductById)
router.get('/getProductByName/:name', ProductController.getProductByName)
router.get('/getAllProducts', ProductController.getAllProducts)
router.get('/getProductByPrice/:price', ProductController.getProductByPrice)
router.get('/getProductsWithCategories', ProductController.getProductsWithCategories)
router.get("/getProductsSortered", ProductController.getProductsSortered )
router.post('/createProductOrder', ProductController.createProductOrder)


module.exports = router;