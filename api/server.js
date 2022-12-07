const http = require("http");
require("dotenv").config();
const app = require("./app/app");

http.createServer(app).listen(process.env.port || 3501, () =>
    console.log(`Server running on port: ${process.env.port}`)
  );
