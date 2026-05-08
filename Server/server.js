const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();


// ============================
// MIDDLEWARE
// ============================

app.use(cors());
app.use(express.json());


// ============================
// MONGODB CONNECTION
// ============================


  

mongoose.connect(process.env.MONGO_URI)




.then(() => console.log("MongoDB Connected"))

.catch((err) => console.log(err));


// ============================
// SCHEMA
// ============================

const messageSchema = new mongoose.Schema({

  name: String,
  email: String,
  message: String,

});


// ============================
// MODEL
// ============================

const Message = mongoose.model("Message", messageSchema);


// ============================
// ROUTE
// ============================

app.post("/contact", async (req, res) => {

  try {

    console.log(req.body);

    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const savedData = await newMessage.save();

    console.log(savedData);

    res.json({
      success: true,
      message: "Saved Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

// ============================
// SERVER
// ============================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});