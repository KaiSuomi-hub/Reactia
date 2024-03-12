require("dotenv").config();
// routing
const users = require("./Routes/users");
const express = require("express");
const app = express();
const multer = require("multer");
// needed for uploading files
const upload = multer({ dest: "uploads/" });
// port to listen to
const PORT = process.env.PORT || 3001;

//
// middleware
// urlencoded needs this enabled
app.use(express.urlencoded({ extended: true }));
//for json use
app.use(express.json());
// start server
app.listen(PORT, () => {
    console.log("Serving on port " + PORT);
});

// for mapping routing
app.use('/', users)


// get

app.get("/", (req, res) => {
    console.log("GET get request");

    res.send("<h1>Hello World!</h1>");
});
// info
app.get("/info", (req, res) => {
    console.log("GET info request");
    const id = req.query.id;
    const fname = req.query.fname;

    res.send(
        "<h1>Info!</h1><p>Idsi on " + id + "ja etunimesi on " + fname + "</p>"
    );
});

// json
app.get("/json", (req, res) => {
    res.status(201).json("success");
    console.log("GET json request");
    const users = [
        { fname: "antti", sname: "suomi" },
        { fname: "mika", sname: "ruotsi" },
        { fname: "mia", sname: "saksa" },
    ];
    res.json(users);
});
//status
app.get("/error", (req, res) => {
    res.status(404).json("can't find error message");
    console.log("GET error request");
});
// post data to user
app.post("/form/", upload.none(), (req, res) => {
    console.log("posting data to server");
    const id = req.body.id;
    const fname = req.body.fname;
    console.log("tulos" + id + " " + fname);
    res.end();
});
// post json to form
app.post("/jsonform/", upload.none(), (req, res) => {
    console.log("posting data to server");
    const id = req.body.id;
    const fname = req.body.fname;
    console.log("tulos " + id + " " + fname);
    res.end();
});


//
// Ei endpoitteja tänne
// luodaan routerilla sijainnit