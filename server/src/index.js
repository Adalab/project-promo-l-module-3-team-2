const cors = require("cors");
const express = require("express");
// data
const usersData = require("./data/users.json");
console.log(usersData);
// SERVER
// config server
const app = express();
app.use(express.json());
app.use(cors());
// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});
