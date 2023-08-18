const express= require("express");
const Product= require("../models/Product.js");
const fetchuser= require("../middleware/fetchuser.js");

const router= express.Router();


router.get("/getproducts", fetchuser, async function(req, res){

    const products= await Product.find({user: req.user.id})

    res.json({products});

})


router.post("/addtocart", fetchuser, async function(req, res){

    let success= false;

    try {
        const newProduct= new Product({
            user: req.user.id,
            name: req.body.name,
            price: req.body.price,
            imgUrl: req.body.imgUrl,
            company: req.body.company,
            desc: req.body.desc,
            color: req.body.color
        })
    
        await newProduct.save();
    
        success= true;

        res.json({success, newProduct});        
    
    } catch (error) {
    
        console.log(error);
        res.json({success, error});    
    }

});

router.delete("/removeproduct", fetchuser, async function(req, res){

    let success= false;

    try {

        const product= await Product.findByIdAndDelete(req.body.productId);

        success= true;

        console.log(product);
        res.json({success});        
    } catch (error) {
        console.log(error)
        res.json({error: "Internal Server Error !"});
    }

})


module.exports= router;