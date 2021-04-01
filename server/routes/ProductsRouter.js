const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const router = Router()

// aqui vai as requisições
router.get('/', ProductsController.getAllProducts)
router.get('/:id', ProductsController.getProductById);
router.post('/', ProductsController.postProduct);
router.post('/many', ProductsController.postManyProducts);
router.put('/:id', ProductsController.putProduct);
router.delete('/:id', ProductsController.deleteProduct);

module.exports = router