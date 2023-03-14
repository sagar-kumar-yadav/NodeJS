const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) =>{
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmax%}", orgVal.main. temp);
  temperature = temperature.replace("{%location%}", orgVal.main. temp);
  temperature = temperature.replace("{%country%}", orgVal.main. temp);
}

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=61c2e39cbe4c69bf054f2cf2a69a9732")
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(arrData[0].main.temp);
        const realTimeData = arrData.map((val) => {
          // console.log(val.main);
          replaceVal(homeFile, val);
        })
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);

        console.log("end");
      });
  }
});

server.listen(8000, "127.0.0.1");
