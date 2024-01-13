const express = require("express");
const router = express.Router();

const Room = require("../models/room.js");

router.get("/", async (req, res) => {
  try {
    const room = await Room.find({});
   res.send(room)
  } catch (err) {
    console.log(`getting an error while fetch data ${err}`);
    return res.status(400).json({ message: err });
  }
});

router.get("/getroombyid/:roomid", async (req, res) => {
  const roomid = req.params.roomid;

  try {
    const room = await Room.findOne({ _id: roomid });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.send(room);
  } catch (err) {
    console.log(`Getting an error while getting data: ${err}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;