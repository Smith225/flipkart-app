const mongoose= require("mongoose");

const url= "mongodb://127.0.0.1/flipkart";

function connectToMongo(){
    mongoose.connect(url)
}

module.exports= connectToMongo;