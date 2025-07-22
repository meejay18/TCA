const os = require('os')
const fs = require('fs')

fs.mkdir('../logs', (err) => {
  if (err) {
    console.log(err)
  } else {
    const data = `
Platform: ${os.platform()}
Architecture: ${os.arch()}
Total Memory: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB
CPU info: ${os.cpus()[0].model}
Uptime: ${os.uptime().toFixed(2)} seconds`

    fs.writeFile('../logs/system-info.txt', data, 'utf-8', (err, data) => {
      if (err) {
        console.log(err.message)
      }
      fs.appendFile('../logs/system-info.txt', `Checked At : ${new Date()}`, 'utf-8', (err, data) => {
        if (err) {
          console.log(err.message)
        } else {
          fs.rename('../logs/system-info.txt', '../logs/summary.txt', (err, data) => {
            if (err) {
              console.log(err.message)
            } else {
              fs.readFile('../logs/summary.txt', 'utf-8', (err, data) => {
                if (err) {
                  console.log(err.message)
                } else {
                  fs.copyFile('../logs/summary.txt', '../logs/backup.txt', (err, data) => {
                    if (err) {
                      console.log(err.message)
                    } else {
                      fs.unlink('../logs/summary.txt', (err, data) => {
                        if (err) {
                          console.log(err.message)
                        } else {
                          console.log('File deleted successfully')
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
    })
  }
})
