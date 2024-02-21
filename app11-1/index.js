const http = require('http')
const port = 3000
http.createServer(render).listen(port)
console.log(`Server start on port: 3000`)

function render(require, response) {
    response.writeHead(200, {'Content-Type':'text/html'})
    let html = `
    <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        
        </body>
        </html>
    `
    response.write(html)
    response.end()
}