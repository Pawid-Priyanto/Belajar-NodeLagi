const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Ini tampilan web'))
app.get('/profile', (req, res) => res.send('Ini tampilan profile'))
app.get('/aboutus', (req, res) => res.send('Ini tampilan abou us'))

app.listen(5000, ()=> console.log("Project pertama saya"))