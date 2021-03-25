const { Router } = require('express')
const UsersController = require('../controller/UsersController')
const router = Router()

// aqui vai as requisições
router.get('/', UsersController.getUsers);
router.get('/:userUid', UsersController.getUserOnly);
router.post('/', UsersController.postUser);
router.put('/:userUid', UsersController.putUser);
router.delete('/:userUid', UsersController.deleteUser);

module.exports = router