const express = require("express")
const multer = require("multer")
const app = express()
var upload = multer({ dest: "public/uploads/" })
    // const storage = multer.diskStorage({
    //     destination: (req, file, callback) => {
    //         callback(null, "./uploads")
    //     },
    //     filename: (req, file, callback) => {
    //         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    //     }
    // })

// const upload = multer({ storage }).array("fileuploader", 1)
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/fileupload.html")
})
app.post("/", upload.any(), (req, res) => {
    res.send(req.files)
})
app.listen(3000, () => {
    console.log("server is up and running")
})