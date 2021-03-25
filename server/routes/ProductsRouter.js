const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const router = Router()

// aqui vai as requisições
router.get('/', ProductsController)

module.exports = router