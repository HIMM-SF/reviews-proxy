const express = require("express");
const app = express();
const port = 3040;
const path = require("path");
const cors = require("cors");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/api/reviews', (req, res) => {
    proxy.web(req, res, {
        target: "http://localhost:4000"
      });
} )

// app.all('/recommendations', (req, res) => {
//     proxy.web(req, res, {
//         target: "http://localhost:3009"
//       });
// } )

// app.all('/photos', (req, res) => {
//     proxy.web(req, res, {
//         target: "http://localhost:3001"
//       });
// } )


app.listen(port, () => console.log(`Proxy server running on port ${port}`));