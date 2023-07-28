//code is modified from Hemanth's code that was shown for Lab 10 requirement, accessed November 29, 2022
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/csci3172-lab10") {
    //Create a JSON Object
    const jsonObject = {
      Name: "Lynda Ofume",
      Email: "Ofume.Lynda@dal.ca",
    };
    // The JSON.stringify() method converts a JavaScript value to a JSON string
    const jsonContent = JSON.stringify(jsonObject);
    // The call to end() function indicates to the server that all processes have been finished
    // so that it can send the response to the user.
    res.end(jsonContent);
  }
});

server.listen(80);
console.log("Node.js web server at port 80 is running..");
console.log("Step 1: Please make sure you click RUN to start the server")
console.log("Step 2: Please go to localhost:80/csci3172-lab10 to view info");
