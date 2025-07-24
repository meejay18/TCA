const fs = require('fs')
const os = require('os')

const info = `
platform : ${os.platform()}
Architecture : ${os.arch()}
Total Memory : ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB
CPU info model : ${os.cpus()[0].model}
Uptime : ${os.uptime()} Seconds
`

fs.mkdir('../logs', (err) => {
  if (err) {
    console.log(err.message)
  } else {
    fs.writeFile('../logs/system_info.txt', info, 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      } else {
        fs.appendFile('../logs/system_info.txt', `Checked At: ${new Date()}`, 'utf-8', (err, data) => {
          if (err) {
            console.log(err.message)
          } else {
            fs.rename('../logs/system_info.txt', '../logs/summary.txt', (err, data) => {
              if (err) {
                console.log(err.message)
              } else {
                fs.readFile('../logs/summary.txt', 'utf-8', (err, data) => {
                  console.log(data)

                  if (err) {
                    console.log(err)
                  } else {
                    fs.copyFile('../logs/summary.txt', '../logs/backup.txt', (err, data) => {
                      if (err) {
                        console.log(err)
                      } else {
                        fs.unlink('../logs/summary.txt', (err, data) => {
                          if (err) {
                            console.log(err)
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})
