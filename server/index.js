const express = require('express')
const path = require("path")
const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../", './public/index.html')) )

app.use('/assets', express.static(path.join(__dirname, '../public/assets')))
app.use('/images', express.static(path.join(__dirname, '../public/assets/images')))

app.listen(3000, () => console.log('server is running on port 3000!'))
