// const fs = require('fs')

// const clubNames = ['Ac Milan', ' Inter Milan', ' Barcelona', ' Porto', ' Chelsea']
// const FileSystemPractice = () => {
//   fs.writeFile('./clubs.txt', clubNames.toString(), 'utf-8', (err, data) => {
//     if (err) {
//       console.log('Error Writing File')
//     } else {
//       console.log('file Written successfully')
//       fs.readFile('./clubs.txt', 'utf-8', (err, data) => {
//         if (err) {
//           console.log('Error reading File')
//         } else {
//           console.log(`File Read Successfully:  \n${data}`)
//         }
//         fs.copyFile('./clubs.txt', './newClubFile.txt', (err, data) => {
//           if (err) {
//             console.log('Error copying file')
//           } else {
//             console.log('File copied successfully')
//           }
//         })
//         fs.cp('./newClubFile.txt', './newClubFile1.txt', (err, data) => {
//           if (err) {
//             console.log(err.message)
//           }
//         })
//       })
//     }
//   })
// }
// FileSystemPractice(clubNames)

// // Functions from henceforth must be dynamic!!!!!!
