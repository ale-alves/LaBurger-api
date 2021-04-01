const database = require("../db/models");

//VIEW ALL PRODUCTS
const getAllProducts = (req, res) => {
  database.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: 'ERROR! Try again!',
      })
    );
};

//VIEW PRODUCT BY ID

const getProductById = (req, res) => {
  database.Products.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message:'ERROR! Try again!',
      })
    );
};

//INSERT PRODUCT
const postProduct = (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  database.Products.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: 'ERROR! Try again!',
      })
    );
};

//INSERT MANY PRODUCTS
const postManyProducts = (req, res) => {
    const many = req.body;
    database.Products.postMany(many)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(() =>
        res.json({
          message: 'ERROR! Try again!',
        })
      );
  };

//CHANGES THE DATA
const putProduct = (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  database.Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        message: 'Updated successfully :)',
      });
    })
    .catch(() => {
      res.json({
        message: 'ERROR! Try again!',
      });
    });
};

//DELETE PRODUCT
const deleteProduct = (req, res) => {
  database.Products.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'Successfully deleted :)',
      });
    })
    .catch(() => {
      res.json({
        message: 'ERROR! Try again!',
      });
    });
};

module.exports = { getAllProducts, getProductById, postProduct, postManyProducts, putProduct, deleteProduct };

