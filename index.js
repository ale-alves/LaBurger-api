const express = require("express");
const routes = require("./server/routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.get('*', (req, res) => {
  res.status(200).send({ message: 'Esta é a API do Burger Queen' });
});

app.listen(port, () => {
  console.log("Você está no caminho certo :)");
});
