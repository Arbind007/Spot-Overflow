const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
let sensor_reading = 0;

app.use(cors())

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Server Working')
})

app.post("/getdatasensor", async (req, res) => {
    try {
        let body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
        req.on("end", () => {
          let joinedwords = Buffer.concat(body);
          let jsontext = JSON.parse(joinedwords);
          //console.log(jsontext.data);
          sensor_reading = jsontext.data;
        }); 
        res.status(200).json({state: 'Done'});
    } catch (err) {
        res.status(500).json({state: err.message });
    }
});
  
app.get('/getdatafrontend', (req, res) => {
    res.status(200).json({data : sensor_reading});
})

app.listen(PORT, ()=> {
    console.log(`app is running on port ${PORT}`);
});