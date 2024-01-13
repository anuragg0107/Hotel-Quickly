const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maxcount: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  rentperday: {
    type: Number,
    required: true,
  },
  imageurl: [],
  currentbookings: [],
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
{
    timestamps : true
});

const roomModel = mongoose.model('rooms',roomSchema)

module.exports = roomModel;
