// const http = require('http')
// const studentsDb = require('./dataBase.json')
// const fs = require('fs')
// const port = 8080

// const app = http.createServer((req, res) => {
//   if (req.method === 'POST' && req.url === '/createStudent') {
//     console.log('Creating student')
//     let body = ''

//     req.on('data', (chunk) => {})
//   } else {
//     res.end('<h1>testing http</h1>')
//   }
// })

// app.listen(port, () => {
//   console.log(`server running on port ${port} `)
// })

const http = require('http')
const studentDB = require('./studentDb.json')
const fs = require('fs')
const PORT = 8000

const writeData = (data) => {
  fs.writeFile('./studentDB.json', JSON.stringify(data, null, 2), 'utf-8', (error, data) => {
    if (error) {
      console.log('Error writing to file', error)
    } else {
      return data
    }
  })
}

const server = http.createServer((request, response) => {
  // Create Student
  if (request.method === 'POST' && request.url === '/create-student') {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk
    })

    request.on('end', () => {
      const data = JSON.parse(body)
      data.id = studentDB.length + 1
      studentDB.push(data)
      console.log('Updated', studentDB)
      writeData(studentDB)
      response.writeHead(201, { 'Content-Type': 'text/plain' })
      response.end('Student Created Successfully')
    })
  }
  // Get all students
  else if (request.url === '/all-students' && request.method == 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    const data = JSON.stringify({
      message: 'All students',
      data: studentDB,
    })
    response.end(data)
  }
  // Get a single student
  else if (request.method === 'GET' && request.url.startsWith('/student')) {
    const url = request.url
    const id = parseInt(url.split('/')[2])
    const student = studentDB.find((e) => e.id === id)
    if (student) {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(
        JSON.stringify({
          message: `Student with ID: ${id} and Name: ${student.name} found`,
          data: student,
        })
      )
    } else {
      response.writeHead(404, { 'Content-Type': 'application/json' })
      response.end(
        JSON.stringify({
          message: 'Student not Found',
        })
      )
    }
  }
  // Update student
  else if (request.url.startsWith('/student') && request.method === 'PUT') {
    const url = request.url
    const id = parseInt(url.split('/')[2])
    const studentIndex = studentDB.findIndex((e) => e.id === id)
    console.log(studentIndex)
    if (studentIndex === -1) {
      response.writeHead(404, { 'Content-Type': 'application/json' })
      response.end(
        JSON.stringify({
          message: ` Student with ID: ${id} not found`,
        })
      )
    } else {
      let body = ''
      request.on('data', (chunk) => {
        body += chunk
      })

      request.on('end', () => {
        const data = JSON.parse(body)
        studentDB[studentIndex] = { ...studentDB[studentIndex], ...data }
        writeData(studentDB)
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(
          JSON.stringify({
            message: 'Student Updated Successfully',
            data: studentDB[studentIndex],
          })
        )
      })
    }
  }
  // Write the DELETE endpoint
  else {
    response.writeHead(200, { 'content-type': 'text/html' })
    response.end('<h1>Welcome to The Curve Africa Backend Class</h1>')
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`)
})

// console.log(studentDB[0].name)

// const server = http.createServer((request, response)=>{

//     console.log('Request: ', request)

//     response.writeHead(200, {'content-type': 'text/html'})
//     response.end('<h1>Welcome to The Curve Africa Backend Class</h1>')
// });
