const http = require('http')
const fs = require('fs')
const port = 3000

http.createServer(render).listen(port)
console.log(`Server start on port: `+ port)

function render(require, response) {
    let ctype = {'Content-Type':'text/html'}
    fs.readFile('html/index.html', (error, content) => {
        if(!error) {
            response.writeHead(200, ctype)
            response.write(content)
        } else {
            response.writeHead(404, ctype)
            response.write(content)
        }
        return response.end()
    })
}