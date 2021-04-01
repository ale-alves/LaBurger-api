require("dotenv").config();

const bcrypt = require("bcrypt");

const Users = require("../models/Users");

Users.create({
  username: "admin",
  password: bcrypt.hashSync("123", 10),
});

Users.findAll().then((result) => {
  console.log(result);
});