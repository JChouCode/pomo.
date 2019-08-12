const express = require('express')
const bodyParser = require('body-parser')


const app = new express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({
    info: 'Node.js, Express, and Postgres API'
  })
})

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}.`)
})