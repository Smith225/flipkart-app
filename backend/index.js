const express= require("express");
const connectToMongo= require("./db.js");
const cors= require("cors");

const app= express();

const port= 5000;

connectToMongo();

//Available API Routes
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/product", require("./routes/product.js"));


app.listen(port, ()=>{
    console.log("Server has started at port 5000.")
})