
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {

  //const obj = JSON.parse(req.body)

  //obj.username // 'yahav'

  res.send('Bolbolf!')
})
app.get('/fuckzivziv', async (req, res) => {
  res.send('fuck the sigma. i hate kndrick')
})

app.get('/learn2play')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
