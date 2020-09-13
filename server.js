const express = require('express');
const { dirname } = require('path');

const app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000 , () => {
    console.log('server running on port 3000');
})