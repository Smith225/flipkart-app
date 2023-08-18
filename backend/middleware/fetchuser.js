const jwt= require("jsonwebtoken");

const secretKey= "Smithisagood@boy";

function fetchuser(req, res, next){

    const token= req.header("auth-token");

    if(!token)
    {
        return res.status(401).json({error: "Access Denied"});
    }

    try{

        const data= jwt.verify(token, secretKey);
        req.user= data.user;

        console.log(data);
        next();
    }
    catch(error){
        console.log(error);
    }

}

module.exports= fetchuser;