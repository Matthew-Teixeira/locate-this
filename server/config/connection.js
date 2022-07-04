const mongoose = require("mongoose");


mongoose
  .connect("mongodb+srv://Matt-T:BAIley1234@cluster0.ugd5d.mongodb.net/locate-this?retryWrites=true&w=majority" || "mongodb://127.0.0.1:27017/truck-yeah", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("MongoDB connetion error"));

module.exports = mongoose.connection;
