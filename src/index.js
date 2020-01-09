const app = require('express')()
import bodyParser from 'body-parser'
app.use(bodyParser.json({ limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: false }))

import * as main from './router/control/main'
main.router(app)

import http from 'http'
app.server = http.createServer(app)
app.server.listen(80, ()=>{ console.log('whatsapp tester is running at port ' + app.server.address().port) })
export default app
