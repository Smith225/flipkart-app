import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [crediantials, setCrediantials]= useState({
        email: "",
        password: ""
    })

    const {email, password}= crediantials;

    const navigate= useNavigate();

    async function login(){

        const url= "http://localhost:5000/api/auth/login";

        const response= await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        
        const data= await response.json();
        console.log(data);

        if(data.success)
        {
            localStorage.setItem("token", data.authToken);
            navigate("/");        
        }
        else{
            alert(data.error);
        }
    }



    function handleChange(e){
        setCrediantials({...crediantials, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        login();
    }

    return (
        <div className="container my-4">
            
            <h2>Login</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group my-4">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required minLength={5} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login