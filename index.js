const express = require('express')
const routes = require('./server/routes')
const app = express()
const PORT = 3000

app.use(routes);

app.use(express.json());

app.listen(PORT, () => {
  console.log('Você está no caminho certo :)')
  // console.log(`Example app listening at http://localhost:${port}`)
})

// app.listen(PORT);




