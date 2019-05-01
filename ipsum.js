const https = require("https");
const http = require("http");
//print error for failure
function printError(error){
    console.error(error.message);
}
//get lorem ipsum data via api
function get(){
    //connect to our api with our api key and enter the specified city in query
    const req = https.get(`https://baconipsum.com/api/?type=meat-and-filler`, response => {
        // read the data make an empty body string
        let body = " ";
        response.on('data', chunk => {
            //upon a response that has data --> add the chunk to the body string
            body += chunk;
        });
        response.on('end', () => {
            if (response.statusCode === 200){
                //when we hit the json end tag
                try {
                    const main = JSON.parse(body);
                    //parse the json body and assign it to js
                    // console.log(typeof main);
                    // var change = String(main);
                    // console.log(typeof change);
                    // console.log(change);

                    // var bruh = JSON.stringify(main);
                    return main;

                    // printWeather(main.name, main.main.temp)
                    //call the method and print the weather
                } catch (error) {
                    printError(error);
                }}
            else{
                const statusErrorCode = new Error("Error. Please enter a city name or zip code");
                printError(statusErrorCode);
            }
        });

    });
}
module.exports.get = get;