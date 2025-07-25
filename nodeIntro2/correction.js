// const fs = require('fs')

// const array = [
//   { path: './newPlayers.txt', content: '1.Sancho \n2.Yamal \n3.Ekitike' },
//   // { path: './second.txt', content: '1.Wirtz \n2.Frimpong \n3.Cunha' },
//   // { path: './third.txt', content: '1.Mbuemo \n2.Bissouma \n3.Zirkzee' },
// ]

// const fileSystem = (path, content) => {
//   fs.writeFile(path, content, 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err.message)
//     } else {
//       console.log('File Written successfully')
//       fs.readFile(path, 'utf-8', (err, data) => {
//         if (err) {
//           console.log(err.message)
//         } else {
//           console.log(`File read successfully \n${data}`)
//         }
//         const newPath = path.replace('.txt', '1.txt')
//         // console.log(newPath)
//         fs.copyFile(path, newPath, (err) => {
//           if (err) {
//             console.log(err.message)
//           } else {
//             console.log(`File copied successfully `)
//           }
//         })
//       })
//     }
//   })
// }
// // fileSystem('.clubs.txt', '1.Ac Milan \n2.Roma \n3.Newcastle \n4.Bayern ')
// array.forEach((e) => fileSystem(e.path, e.content))
