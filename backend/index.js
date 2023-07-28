const express= require("express");
const connectToMongo= require("./db.js");

const app= express();

const port= 5000;

connectToMongo();

//Available API Routes
app.use("/api/data", require("./routes/data.js"));


app.listen(port, ()=>{
    console.log("Server has startes at port 5000.")
})