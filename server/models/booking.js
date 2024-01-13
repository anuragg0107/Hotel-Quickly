const mongoose = require('mongoose');

const bookingRoomSchema = mongoose.Schema({
    roomid :{
        type : String,
        required : true
    },
    userid :{
        type : String,
        required : true
    },
    transitionid :{
        type : String,
        required : true
    },
    room :{
        type : String,
        required : true
    },
   fromDate :{
        type : String,
        required : true
    },
    toDate :{
        type : String,
        required : true
    },
    totalAmout :{
        type : Number,
        required : true
    },
    totalDays :{
        type : Number,
        required : true
    },
    status :{
        type : String,
        required : true,
        default :"booked"
    },
},{
    timestamps : true
})

const bookingModel = mongoose.model("bookings", bookingRoomSchema)

module.exports = bookingModel;

