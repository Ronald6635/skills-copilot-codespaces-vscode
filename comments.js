// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// Create a new file named comments.js and add the following code:

var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res) {
    console.log("Request for " + req.url + " received.");

    if (req.url === "/comments") {
        res.writeHead(200, {"Content-Type": "application/json"});
        var comments = {
            comments: [
                {name: "John Doe", comment: "This is a comment."},
                {name: "Jane Doe", comment: "This is another comment."}
            ]
        };
        res.end(JSON.stringify(comments));
    } else {
        fs.readFile(path.join(__dirname, "comments.html"), function(err, data) {
            if (err) {
                res.writeHead(404, {"Content-Type": "text/plain"});
                res.end("404 Not Found");
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    }
});

server.listen(3000);
console.log("Server listening on port 3000");
// This code creates a simple web server that listens on port 3000 and serves the comments.html file. If the request URL is /comments, the server returns a JSON object containing two comments. Otherwise, the server returns the contents of the comments.html file.

// Run the comments.js file using the node command:

// node comments.js
// Open a web browser and navigate to http://localhost:3000. You should see the comments.html file displayed in the browser. If you navigate to http://localhost:3000/comments, you should see a JSON object containing two comments.

// This example demonstrates how to create a simple web server that serves static files and dynamic content. You can modify the code to serve different types of content or handle other types of requests.
