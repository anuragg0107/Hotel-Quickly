const express = require('express');
const app = express();
const dbconfig = require('./data');
const userRoutes = require('./routes/userRoutes.js')
// for receiing the data 

app.use(express.json());  
const roomRoutes = require("./routes/roomRoutes.js");
app.use("/api/rooms",roomRoutes);
app.use("/api/users",userRoutes);
const port =process.env.PORT  || 8080;

app.listen(port,()=>{
console.log(`server running at  ${port}`);
})

