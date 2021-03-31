const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

//post last workout
app.post("/", (req, res) => {
    db.getLastInsertedDocument.find({}).sort({_id:-1}).limit(1) (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }  
    };
});

//insert new workout
app.post("/workouts", (req, res) => {  
    db.notes.insert(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
});

//multiple exercise in stats page
app.post("/stats", (req, res) => {  
    db.notes.find({ }).sort({_id:-1}).limit(7), (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    };
});

app.listen(3000, () => {
    console.log("App running on port 3000!");
});