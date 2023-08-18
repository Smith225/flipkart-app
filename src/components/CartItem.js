import { Link } from "react-router-dom";


function CartItem(props) {

    const { productId, name, price, imgUrl, company, desc, color } = props;
    

    async function removeProduct(){

        const url= "http://localhost:5000/api/product/removeproduct";

        const response= await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({productId})
        })

        const data= await response.json();

        console.log(data);
        if(data.success){
            alert("Item removed from the cart");
            // window.location.reload(); Check for alternatives
        }
        else{
            alert(data.error);
        }
    }


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function handleClick(e){
        e.preventDefault();
        removeProduct();
    }


    return (
        <>

            <link rel="stylesheet" href={require("../css/productStyles.css")} />

            <div className="container mt-5">

                <div className="row">
                    <div className="col-4" >
                        <img src={imgUrl} className="d-block mx-auto" alt="productImg" width="80%" />
                        <h2 className="mt-3 property" style={{ textAlign: "center" }}>{capitalize(name)}</h2>
                    </div>

                    <div className="col-8">
                        <p className="property">Description :<span className="value">{desc}</span> </p>
                        <p className="property">Company: <span className="value">{company}</span></p>

                        <p className="property">Colours available : 

                            {color.map((element) => {
                                return <span className="colorBox" style={{ backgroundColor: element }}>
                                </span>
                            })}

                        </p>

                        <p className="property">Price: <span className="value">{price}</span></p>

                        <Link className="btn btn-danger mx-4 btn-sm" onClick={handleClick}>Remove from Cart</Link>
                        <Link className="btn btn-success mx-4 btn-sm" to="/login">Buy Now</Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem;