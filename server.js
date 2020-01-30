const express = require('express')
const app = express()
const path = require('path')
const serveStatic = require('serve-static')
app.use(serveStatic(__dirname + '/dist'))
let port = process.env.PORT || 3000
let hostname = '127.0.0.1'

app.listen(port,  () => {
	console.log(`Server running at ${port}`)
})