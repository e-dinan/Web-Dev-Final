const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const scheduleSchema = new Schema({
  week: Number,
  dow: String,
  topic: String
});


module.exports = mongoose.model("Schedule", scheduleSchema)