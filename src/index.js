const cors = require("cors");
const express = require("express");
// SERVER
// config server
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const staticServerPath = "./public"; // relative to the root of the project
app.use(express.static(staticServerPath));

app.post("/card", (req, res) => {
  const userData = req.body; // recibimos los datos de name,phone,job....

  console.log(req.body);

  if (!req.body.name || req.body.name === "") {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: name",
    });
  } else if (!req.body.job || req.body.job.length < 2) {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: job",
    });
  } else if (!req.body.photo || req.body.photo === getAvatar) {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: photo",
    });
  } else if (!req.body.email || req.body.email === "") {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: email",
    });
  } else if (!req.body.phone || req.body.phone === "") {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: phone",
    });
  } else if (!req.body.linkedin || req.body.linkedin === "") {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: linkedin",
    });
  } else if (!req.body.github || req.body.github === "") {
    res.status(404).json({
      success: false,
      error: "Mandatory fields: github",
    });
  } else {
    // Insertar en la base de datos
    // Responder que ha ido bien

    res.json({
      success: true,
    });
  }
});
