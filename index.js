const express = require('express')
const routes = require('./server/routes')
const app = express()
const PORT = 3000

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Você está no caminho certo :)')
})






