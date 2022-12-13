require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const spotify = require('./middlewares/spotify')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/spotify/v1', spotify)

app.listen(3001)