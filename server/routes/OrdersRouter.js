const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

// aqui vai as requisições
router.get('/', OrdersController)

module.exports = router