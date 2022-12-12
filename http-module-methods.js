import http from 'http'

// we use the createServer method on the http module to create a server. The method will take a callback. The callback takes in 2 parameters; request (the incoming request from the client) & response(what we're sending back)
const server = http.createServer((request, response) => {
    console.log(request)
    if(request.url === '/'){
        response.end('Hey, Assalamualaikum Rajea!')
        return
    }
    if(request.url === '/about'){
        response.end('Heres our short history')
        return
    }
    response.end(`Oops, it seems like we dont have the page you're looking for`)
    return
})

// we also need to specify the port number for our server, so we'll use the listen method for that. Inside the method we will specify an arbitrary number.
server.listen(5000)