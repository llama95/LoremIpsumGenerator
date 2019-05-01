var renderer = require("./renderer");
var ipsum = require("./ipsum");
//index page/home route
function homeRoute(request,response){
    //just show us plain text for now before we add html/css
    var commonHeader = {'Content-Type': 'text/plain'};
    var body = "";
    if (request.url === '/') {
        response.writeHead(200, commonHeader);
        // response.write("llama");
        // renderer.view("home",response);
        var ipsumData = ipsum.get();
        var ipsumData2 = String(ipsumData);
        // console.async.log(typeof ipsumData); //undefined
        // var ipsumData2 = ipsumData.toString();
        // //console.log(ipsumData2);
        response.async.write(ipsumData2);

        response.end();
        // renderer.view("search",null,response);
        // renderer.view("footer",null,response);
        // response.end();
        // }else{
        //     request.on("data",function (postBody) {
        //
        //         var query = queryString.parse(postBody.toString());
        //         var bruh = query.username.toString();
        //         response.write(bruh);
        //         response.end();
        //     });
        // }
    }
}

module.exports.homeRoute = homeRoute;

