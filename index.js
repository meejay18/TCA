const http = require('http')
const fs = require('fs')
const PORT = 5000

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/createCar') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
      console.log(body)
    })

    req.on('end', () => {
      const data = JSON.parse(body)

      res.writeHead(200, {
        'content-type': 'text/plain',
      })
    })
  }
})

server.listen(
  (PORT,
  () => {
    console.log(`Server running on port ${PORT}`)
  })
)
