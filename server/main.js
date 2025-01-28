
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {

  //const obj = JSON.parse(req.body)

  //obj.username // 'yahav'

  res.send('Bolbolf!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
