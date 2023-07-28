const mongoose= require("mongoose");

const dataSchema= new mongoose.Schema({
    navData: [{
        url: String,
        text: String   
    }],
    bannerData: [{
        id: Number,
        url: String
    }]
});

const Data= mongoose.model("data", dataSchema);

module.exports= Data;

