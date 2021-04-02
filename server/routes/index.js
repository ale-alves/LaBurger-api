const { Router } = require("express");
const router = Router();

const UsersRouter = require("./UsersRouter");
const ProductsRouter = require("./ProductsRouter");
const OrdersRouter = require("./OrdersRouter");

const morgan = require("morgan");
router.use(morgan("dev"));

// HERE ARE ALL THE ROUTES
router.use("/users", UsersRouter);
router.use("/products", ProductsRouter);
router.use("/orders", OrdersRouter);

//ERROR - ROUTE NOT FOUND
router.use((req, res, next) => {
  const error = new Error("route not found :(");
  error.status = 404;
  next(error);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.send({
    erro: {
      mensage: err.message,
    },
  });
});

module.exports = router;
