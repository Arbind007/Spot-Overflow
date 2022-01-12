const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const sensorsdata = require("./models/sensordataModel");
const moment = require('moment-timezone');
require("dotenv").config();
const app = express();
app.use(cors())

var minutes = 0.1, the_interval = minutes * 60 * 1000;
let sensor_reading = 0;
const PORT = process.env.PORT || 5001;

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MongoDB connection established");
    }
);

//validation

app.get('/', (req, res) => {      
    res.send('Server Working')
})

//data from arduino

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

//sending data to frontnend

app.get('/getdatafrontend', (req, res) => {         
    res.status(200).json({data : sensor_reading});
})

// displaying the saved data

app.get("/getsavedata", async (req, res) => {
    try {
      const saved_data = await sensorsdata.find();
      res.status(200).json(saved_data.reverse());
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// auto save values(will always run)

let temp;
let flag1 = true,flag2 = false; 
var autoadddata = function() {
    const dateIndia = moment.tz(Date.now(), "Asia/Kolkata");
    var date = dateIndia.toString();
    let x = date.indexOf('GMT');    //parsing
    date = date.substring(0, x).trim(); 
    if(sensor_reading != 0){
    // console.log(the_interval);
    try{
        const newSensorData = new sensorsdata({sensor_reading,date});
        newSensorData.save();
    }
    catch (err) {
        console.log(err.message)
    }
    if(sensor_reading == temp){
        if(flag1){
        the_interval = the_interval * 2;
        flag1 = false;
        flag2 = true;
        }
    }
    else{
    if(flag2){
        the_interval = the_interval / 2;
        flag1 = true;
        flag2 = false;
    }
  }

}
temp = sensor_reading;
setTimeout(autoadddata, the_interval);
}

setTimeout(autoadddata, the_interval);

app.listen(PORT, ()=> {
    console.log(`app is running on port ${PORT}`);
});