import { useEffect, useState } from "react";

function UserInfo() {

    const [user, setUser]= useState({
        name: "",
        email: "",
        id: ""
    });


    const {name, email, id}= user;

    async function getUser(){

        const url= "http://localhost:5000/api/auth/user";

        const response= await fetch(url,  {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem("token")
            }
        })
        
        const data= await response.json();
        console.log(data);
    
        setUser({
            name: data.user.name,
            email: data.user.email,
            id: data.user._id
        })
    }

    useEffect(function(){
        getUser();
    }, [])

    return (
        <>
            <div className="container my-5">
                
                <h2>Account</h2>

                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Id : {id}</p>

            </div>
        </>
    )
}

export default UserInfo