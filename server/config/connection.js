const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://Matt-T:BAIley1234@cluster0.ugd5d.mongodb.net/locate-this?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("MongoDB connetion error"));

module.exports = mongoose.connection;
