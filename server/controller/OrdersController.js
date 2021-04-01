const database = require("../db/models");

//VIEW ALL ORDERS
const getAllOrders = (req, res) => {
  database.Orders.findAll({
    include: [
      {
        model: database.Products,
        as: "Products",
        required: false,
        attributes: [
          "id",
          "name",
          "price",
          "flavor",
          "complement",
          "image",
          "type",
          "sub_type",
        ],
        through: {
          model: database.ProductsOrders,
          as: "ProductsOrders",
          attributes: ["amount"],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
      })
    );
};

//VIEW ORDER BY ID
const getOrderById = (req, res) => {
  database.Orders.findAll({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: database.Products,
        as: "Products",
        required: false,
        attributes: [
          "id",
          "name",
          "price",
          "flavor",
          "complement",
          "image",
          "type",
          "sub_type",
        ],
        through: {
          model: database.ProductsOrders,
          as: "ProductsOrders",
          attributes: ["amount"],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
      })
    );
};

//INSERT ORDER
const postOrder = async (req, res) => {
  const { user_id, client_name, table, status, processedAt } = req.body;
  await database.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  }).then((result) => {
    req.body.products
      .map((item) => {
        const itemProduct = database.Products.findByPk(item.id);
        if (!itemProduct) {
          return res.status(400).json({
            message: "ERROR! Try again!",
          });
        }

        const itemOrders = {
          order_id: result.id,
          product_id: item.id,
          amount: item.amount,
        };

        database.ProductsOrders.create(itemOrders);

        return res.status(200).json(result);
      })
      .catch(() =>
        res.status(400).json({
          message: "ERROR! Try again!",
        })
      );
  });
};

//CHANGES THE DATA
const putOrder = (req, res) => {
  const { user_id, client_name, table, status } = req.body;
  database.Orders.update(
    {
      user_id,
      client_name,
      table,
      status,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Updated successfully :)",
      });
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
      })
    );
};

//DELETE ORDER
const deleteOrder = (req, res) => {
  database.Orders.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: "Successfully deleted :)",
      });
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
      })
    );
};

module.exports = {
  getAllOrders,
  getOrderById,
  postOrder,
  putOrder,
  deleteOrder,
};
