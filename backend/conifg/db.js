const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rishikeshkumar3102:JrWR3DVjgCPgVBcJ@cluster0.2z3kofn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Connection to the database failed:", error);
  }
};

module.exports = connectDB;
