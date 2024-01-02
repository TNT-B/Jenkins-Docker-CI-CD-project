const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1> Welcome to 21MMT </h1>'))

app.listen(port, () => console.log('port :' + port))