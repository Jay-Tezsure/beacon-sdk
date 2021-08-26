const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/examples/dapp.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})