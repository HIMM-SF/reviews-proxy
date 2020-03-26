const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const cors = require("cors");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// app.all('/api/images', (req, res) => {
//   proxy.web(req, res, {
//       target: "http://localhost:8081"
//     });
// } )

// app.all('/api/rooms', (req, res) => {
//     proxy.web(req, res, {
//         target: "http://localhost:4000"
//       });
// } )

// app.all('/api/rooms', (req, res) => {
//   proxy.web(req, res, {
//       target: "http://localhost:8080"
//     });
// } )

// app.all('/api/reviews', (req, res) => {
//     proxy.web(req, res, {
//         target: "http://localhost:3002"
//       });
// } )

app.listen(port, () => console.log(`Proxy server running on port ${port}`));