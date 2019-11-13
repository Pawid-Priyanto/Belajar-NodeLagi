const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Ini tampilan web'))

app.listen(5000, ()=> console.log("Project pertama saya"))