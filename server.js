const express = require('express');
const proxy = require("express-http-proxy");
const url = require("url");

const dir = process.argv[2];
const port = 8080;
const app = express();

app.use(
    "/office365", 
    proxy("https://outlook.office365.com", {
        forwardPath: (req, res) => {
            return "/api/v1.0" + req.url;
        }
    })
);

app.use(express.static(dir));
app.listen(port);

console.log('\n Serving directory /' + dir + ' on port ' + port);