const fs = require('fs')
const data = 'My name is mije'
fs.writeFile('./new.txt', data, 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message)
  }

  fs.readFile('./new.txt', 'utf-8', (err, data) => {
    const result = String(data.split(' ').length)
    console.log(result)

    if (err) {
      console.log(err.message)
    }

    fs.writeFile('./result.txt', result, 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('File successfully added')
      }
    })

    fs.unlink('./new.txt', (err, data) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('File successfully deleted')
      }
    })
  })
})
