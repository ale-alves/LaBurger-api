const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

// aqui vai as requisições
router.get('/', OrdersController.getAllOrders);
router.get('/:id', OrdersController.getOrderById);
router.post('/', OrdersController.postOrder);
router.put('/:id', OrdersController.putOrder);
router.delete('/:id', OrdersController.deleteOrder);

module.exports = router