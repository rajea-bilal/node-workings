import http from 'http'

// we use the createServer method on the http module to create a server. The method will take a callback. The callback takes in 2 parameters; request (the incoming request from the client) & response(what we're sending back)
const server = http.createServer((request, response) => {
    // using the response method write()
    response.write('Welcome to our homepage')
    response.end()
})

// we also need to specify the port number for our server, so we'll use the listen method for that. Inside the method we will specify an arbitrary number.
server.listen(5000)