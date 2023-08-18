const express = require("express");
const User = require("../models/User.js");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser.js");

const router = express.Router();

const secretKey = "Smithisagood@boy";

//Route 1:This Route is for sign up.
router.post("/signup", [
    body("name", "Minimum characters for name should be 2").isLength({ min: 2 }),
    body("email", "Enter a valid email !").isEmail(),
    body("password", "Minimum characters for password should be 5").isLength({ min: 5 })
], async function (req, res) {

    const errors = validationResult(req);
    let success= false;

    if (!errors.isEmpty()) {
        return res.send(errors);
    }

    try {

        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.json({success,error: "This email is already used."});
        }

        const salt = await bcrypt.genSalt(10);

        const passHash = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            "name": req.body.name,
            "email": req.body.email,
            "password": passHash
        })

        await newUser.save();

        const data = {
            user: {
                id: newUser._id
            }
        }

        const authToken = jwt.sign(data, secretKey);

        success= true;
        console.log(authToken);
        res.json({ success, authToken });

    } catch (error) {
        console.log(error)
        res.json({ success, error: "Internal server error !" });
    }

});


//Route 2:This Route is for Login.
router.post("/login", [
    body("email", "Enter a valid email !").isEmail(),
    body("password", "Minimum characters for password should be 5").isLength({ min: 5 })
], async function (req, res) {

    const errors = validationResult(req);

    let success= false;

    if (!errors.isEmpty()) {
        return res.send(errors);
    }

    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.json({success, error: "You have not signed up your account"});
        }

        const passCompare = await bcrypt.compare(req.body.password, user.password);

        if (!passCompare) {
            return res.status(401).json({ success, error: "Please enter correct password" });
        }

        const data = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(data, secretKey);

        success= true;
        res.json({success, authToken});
        console.log(authToken);
    }
    catch (error) {
        console.log(error);
        res.json({ success, error: "Internal server error !" });
    }
})


//Route 3:This Route is for getting logged in user details.
// fetchuser is a middlware and should be used where login is required.As it is used to get user details.

router.get("/user", fetchuser, async function (req, res) {

    let success= false;
    try {
        const user = await User.findById(req.user.id).select("-password -__v");
        
        success= true;
        res.json({success, user});
    } catch (error) {
        console.log(error);
        res.json({ success, error: "Internal server error !" });
    }

});




module.exports = router;