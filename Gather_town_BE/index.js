const express = require("express");
require('dotenv').config();
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./Models/User");
const idGen =require("./Utility/idGenerators")
const app = express();


app.use(cors());
app.use(bodyParser.json());


const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  },
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

  async function saveUser(){
    const id=idGen();
    const user=new User({
      name:id,
      id:id
  })
  await user.save();
  return id;
  }
app.get("/joinspace",async (req, res) => {
    const id=await saveUser();
    console.log(id+" joined space");
    
    res.json({ success: true, id:id });
});

// app.post("/api/joinspace", (req, res) => {
//   const id=idGen();
//     console.log(id+" joined space");
//   res.json({ success: true, id:id });
// });


io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);


  socket.on("location", (data) => {
   socket.broadcast.emit("receiveLocation", {
        id:data.id,
        locationX:data.locationX,
        locationY:data.locationY

   });
  });

  socket.on("join", async (data) => {
    
    
    socket.broadcast.emit("joinedPlayer", {
        id:data.id,
        locationX:data.x,
        locationY:data.y
    });
  });
  
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start the Server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
