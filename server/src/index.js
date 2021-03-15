const cors = require("cors");
const express = require("express");
// data
// const usersData = require("./data/users.json");
// console.log(usersData);
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

//const userData = require("./data.json");
const userData = {
  palette: 1,
  name: "Carmen",
  job: "developer",
  email: "carmen.rama91@gmail.com",
  phone: "673152665",
  linkedin: "carmen-ramos",
  github: "carmen-ramos",
  photo: "image",
};

app.post("/card", (req, res) => {
  console.log(userData);
  res.json(["hola"]);
});

/*
if (userData.job === "") {
  res.status(404)({
    succes: false,
    error: "Mandatory fields: job",
  });
} else {
  res.json({
    dataUser.name
  })
}

if (userData.photo === "") {
  res.status(404)({
    succes: false,
    error: "Mandatory fields: photo",
  });
}
if (userData.phone === "") {
  res.status(404)({
    succes: false,
    error: "Mandatory fields: phone",
  });
}
if (userData.email === "") {
  res.status(404)({
    succes: false,
    error: "Mandatory fields: email",
  });
}
if (userData.linkedin === "") {
  res.status(404)({
    succes: false,
    error: "Mandatory fields: likedin",
  });
}
if (userData.github === "") {
  res.status(404)({
    succes: false,
    error: "Mandatory fields: github",
  });
}
*/
