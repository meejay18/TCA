// const fs = require('fs')

// const array = [
//   { path: './cars.txt', content: '1.Corolla \n2.Lexus \n3.Mercedes' },
//   { path: './school.txt', content: '1.rybeka \n2.hope \n3.kalac' },
// ]

// const fileSystem = (path, content) => {
//   fs.writeFile(path, content, 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err.message)
//     } else {
//       console.log('File written successfully')
//       fs.readFile(path, 'utf-8', (err, data) => {
//         if (err) {
//           console.log(err.message)
//         } else {
//           console.log(data)
//         }
//       })

//       const newPath = `.${path.split('.')[1]}1.txt`
//       console.log(newPath)
//       fs.copyFile(path, newPath, (err) => {
//         if (err) {
//           console.log(err.message)
//         } else {
//           console.log('File copied successfully')
//         }
//       })
//     }
//   })
// }

// array.forEach((element) => fileSystem(element.path, element.content))

// // fileSystem(array[0].path, array[1].content)

// // fileSystem('./clubs.txt', '1.Madrid \n2.Chelsea \n3.Barcelona \n4.Tottenham')
