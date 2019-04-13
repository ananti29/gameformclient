const express = require('express')
const path = require('path')
const app = express()
const winston = require('winston')
const expressWinston = require('express-winston')

const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'

app.use(express.static('dist'))

// winston request logger
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    new (winston.transports.File)({
      name: 'request-file',
      filename: './logs/requestclient.log'
    })
  ],
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: 'HTTP {{req.statusCode}} {{res.responseTime}}ms {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
}))

// winston error logger
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
    new (winston.transports.File)({
      name: 'error-file',
      filename: './logs/errorclient.log'
    })
  ],
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  level: 'error',
  json: true
}))

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status || 505).send('Something broke! The team is hard at work!')
})

// start server
app.listen(port, () => console.log(`client listening on port ${port}! \n` + `client is running on environment ${environment}!`))
