const mongoose = require("mongoose");


mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/truck-yeah", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("MongoDB connetion error"));

module.exports = mongoose.connection;
