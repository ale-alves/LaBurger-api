const database = require("../db/models");

//VIEW ALL ORDERS
const getAllOrders = (req, res) => {
  database.Orders.findAll()
    .then((result) => {
      res.status(200).json(result);
      connection.end();
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
const postOrder = (req, res) => {
  const { user_id, client_name, table, status, processedAt } = req.body;
  database.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
      })
    );
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
        id: req.params.orderId,
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
        message: "Order successfully deleted :)",
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
