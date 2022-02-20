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

//test

// const dateIndia = moment.tz(Date.now(), "Asia/Kolkata");
// var date = dateIndia.toString();
// let x = date.indexOf('GMT');    //parsing
// date = date.substring(0, x).trim(); 
// let time = date.substring(15,24).trim();
// date = date.substring(0, 15).trim(); 
// console.log(date);
// console.log(time);

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

// query with date

app.get("/getsavedatequery",async  (req, res) => {
  try {
    let body = [];
    let vardate;
      req.on("data", (chunk) => {
         body.push(chunk);
      });
      req.on("end",async () => {
        let joinedwords = Buffer.concat(body);
        let jsontext = JSON.parse(joinedwords);
        // console.log(jsontext.data);
        vardate = await Promise.resolve(jsontext.date);
        // console.log(vardate);
        const saved_data = await sensorsdata.find({date: new RegExp(vardate,'i')});
        res.status(200).json(saved_data.reverse());
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// query with date && time

app.get("/getsavedatetimequery",async  (req, res) => {
  try {
    let body = [];
    let vardate,vartime;
      req.on("data", (chunk) => {
         body.push(chunk);
      });
      req.on("end",async () => {
        let joinedwords = Buffer.concat(body);
        let jsontext = JSON.parse(joinedwords);
        // console.log(jsontext.data);
        vardate = await Promise.resolve(jsontext.date);
        vartime = await Promise.resolve(jsontext.time);
        // console.log(vardate);
        const saved_data = await sensorsdata.find({$and : [ {date: new RegExp(vardate,'i')},{time: new RegExp(vartime,'i')}]});
        res.status(200).json(saved_data.reverse());
      });
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
    let time = date.substring(15,24).trim();
    date = date.substring(0, 15).trim(); 
    // console.log(date);
    // console.log(time); 
    if(sensor_reading != 0){
    // console.log(the_interval);
    try{
        const newSensorData = new sensorsdata({sensor_reading,date,time});
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