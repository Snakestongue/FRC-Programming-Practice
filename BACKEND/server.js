const express = require("express");
let app = express();
const path = require("path");
app.use(express.static("public"));
app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "../index.html"));
});
app.listen(9000, ()=>{
    console.log("running")
})