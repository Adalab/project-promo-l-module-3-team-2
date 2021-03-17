const cors = require("cors");
const express = require("express");
const Database = require("better-sqlite3");

// SERVER
// config server
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

//set template engine
app.set("view engine", "ejs");

// init express aplication
const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const db = new Database("./src/database.db", {
  // this line log in console all data base queries
  verbose: console.log,
});

const staticServerPath = "./public"; // relative to the root of the project
app.use(express.static(staticServerPath));

app.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const database = query.get(req.params.id);
  res.render("pages/card", database);
  console.log("paleta:", database.palette);
});

app.post("/card", (req, res) => {
  const response = {};
  if (!req.body.name || req.body.name === "") {
    response.success = false;
    response.error = "Mandatory fields: name";
  } else if (!req.body.job || req.body.job.length < 2) {
    response.success = false;
    response.error = "Mandatory fields: job";
  } else if (!req.body.photo || req.body.photo === "") {
    response.success = false;
    response.error = "Mandatory fields: photo";
  } else if (!req.body.email || req.body.email === "") {
    response.success = false;
    response.error = "Mandatory fields: email";
  } else if (!req.body.phone || req.body.phone === "") {
    response.success = false;
    response.error = "Mandatory fields: phone";
  } else if (!req.body.linkedin || req.body.linkedin === "") {
    response.success = false;
    response.error = "Mandatory fields: linkedin";
  } else if (!req.body.github || req.body.github === "") {
    response.success = false;
    response.error = "Mandatory fields: github";
  } else {
    // Insertar en la base de datos
    try {
      const query = db.prepare(
        `INSERT INTO cards (palette, name, job, photo, email, phone, linkedin, github ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      );
      const result = query.run(
        String(req.body.palette),
        req.body.name,
        req.body.job,
        req.body.photo,
        req.body.email,
        req.body.phone,
        req.body.linkedin,
        req.body.github
      );
      response.success = true;

      if (req.host === "localhost") {
        response.cardURL = `http://localhost:3000/card/${result.lastInsertRowid}`;
      } else {
        response.cardURL = `https://awesome-profile-card-team2.herokuapp.com/card/${result.lastInsertRowid}`;
      }
    } catch (dbError) {
      response.success = false;
      response.error = "Error while saving data.";
    }
  }

  res.json(response);
});
