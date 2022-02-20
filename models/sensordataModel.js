const mongoose = require("mongoose");

const sensordataSchema = new mongoose.Schema({
    sensor_reading : { type: String, required: true },
    date: {type: String, required: true},
    time: {type: String, required: true},    
});
  
module.exports = sensorsdata = mongoose.model("sensorData", sensordataSchema);
  