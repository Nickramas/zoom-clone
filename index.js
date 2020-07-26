const express = require('express')
const app = express()
const server = require('http').Server(app)
const socket = require('socket.io')(server)
const { v4: uuid } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect(`/${uuid()}`)
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})

server.listen(3000)
