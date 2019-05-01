var routes = require("./routes");
//create a listening web server
var http = require("http");
http.createServer(function(request, response) {
    routes.homeRoute(request, response); // home route
}).listen(8080);
console.log('localhost/3000');






//TODO:
// create the server DONE
// create the home route DONE
// add test image to html in the home route DONE
// make sure we can call the home route properly before we can continue to code DONE
// add html/css for text box that will display text of lorem ipsum DONE
// connect to bacon ipsum api DONE
// Get the lorem ipsum to write to the page
// ISSUE: Cant save the data that is entered in the text (# of words, sentences, or paragraphs...) box so we can use it to create the proper lorem ipsum
//
// create the generated route
// Connect to twitter api to tweet out the lorem ipsum you just created
