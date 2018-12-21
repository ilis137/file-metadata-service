const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")

const app = express()
const upload = multer({ dest: "public/uploads/" })

//apply middlewares
app.use(bodyParser.json())
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + "/public"))


//get root url
app.get("/", (req, res) => {
        res.sendFile(__dirname + "/public/fileupload.html")
    })
    //post request for file
app.post("/api/analysefile", upload.any(), (req, res) => {
        res.send({ filesize: req.files[0].size + " bytes" })
    })
    //intialize server
app.listen(3000, () => {
    console.log("server is up and running")
})