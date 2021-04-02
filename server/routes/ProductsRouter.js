const { Router } = require("express");
const ProductsController = require("../controller/ProductsController");
const router = Router();

//HERE ARE ALL THE REQUESTS
router.get("/", ProductsController.getAllProducts);
router.get("/:id", ProductsController.getProductById);
router.post("/", ProductsController.postProduct);
router.put("/:id", ProductsController.putProduct);
router.delete("/:id", ProductsController.deleteProduct);

module.exports = router;
