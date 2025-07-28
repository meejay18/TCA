const http = require('http')
const fs = require('fs')
const port = 4000
const goodsDb = require('./localGoods.json')
const { v4: uuid } = require('uuid')

const writeFileFunction = (data) => {
  fs.writeFile('./localGoods.json', JSON.stringify(data, null, 2), 'utf-8', (err, data) => {
    if (err) {
      console.log(err.message)
    } else {
      return data
    }
  })
}

const server = http.createServer((req, res) => {
  const { url, method } = req

  if (method === 'POST' && url.startsWith('/createNewgood')) {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
      console.log(body)
    })

    req.on('end', () => {
      const data = JSON.parse(body)
      console.log(data)

      const { name, instock, unit, unitPrice, quantity } = data

      const newGood = {
        id: uuid(),
        name,
        instock,
        unit,
        unitPrice,
        quantity,
        totalPrice: unitPrice * quantity,
      }

      goodsDb.push(newGood)
      writeFileFunction(goodsDb)

      res.writeHead(201, { 'content-type': 'application/json' })
      res.end(
        JSON.stringify({
          message: 'Good created successfully',
          data: newGood,
        })
      )
    })
  } else if (url.startsWith('/getAllgoods') && method === 'GET') {
    if (goodsDb.length < 1) {
      res.writeHead(404, { 'content-type': 'application/json' })
      res.end(
        JSON.stringify({
          message: 'No goods Found',
        })
      )
    } else {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(
        JSON.stringify({
          message: 'goods Found',
          Total: goodsDb.length,
          data: goodsDb,
        })
      )
    }
  } else if (url.startsWith('/updateGoods') && method === 'PUT') {
    const id = url.split('/')[2]
    const good = goodsDb.find((e) => e.id === id)
    const findGoodIndex = goodsDb.findIndex((e) => e.id === good.id)
    if (findGoodIndex === -1) {
      res.end(
        JSON.stringify({
          message: 'Good not found ',
        })
      )
    } else {
      let body = ''

      req.on('data', (chunk) => {
        body += chunk
      })

      req.on('end', () => {
        const data = JSON.parse(body)
        const updatedData = (goodsDb[findGoodIndex] = { ...goodsDb[findGoodIndex], ...data })

        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(
          JSON.stringify({
            message: 'File uploaded sucessfully',
            data: updatedData,
          })
        )
        writeFileFunction(goodsDb)
      })
    }
  } else if (url.startsWith('/deleteGood') && method === 'DELETE') {
    const id = url.split('/')[2]
    const good = goodsDb.find((e) => e.id === id)
    const findGoodIndex = goodsDb.findIndex((e) => e.id === good.id)
    if (findGoodIndex === -1) {
      res.writeHead(404, { 'content-type': 'application/json' })
      res.end(
        JSON.stringify({
          message: 'Good not found',
        })
      )
    } else {
      goodsDb.splice(findGoodIndex, 1)

      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(
        JSON.stringify({
          message: 'Good deleted successfully',
          data: null,
        })
      )
      writeFileFunction(goodsDb)
    }
  } else {
    res.writeHead(404, { 'content-type': 'application/json' })
    res.end(
      JSON.stringify({
        message: 'Error',
      })
    )
  }
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
