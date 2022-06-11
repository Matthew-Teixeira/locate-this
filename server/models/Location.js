const { Schema, model } = require("mongoose");

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  long: {
    type: Number,
  },
  lat: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
  },
});

const Location = model("Location", locationSchema);

module.exports = Location;
