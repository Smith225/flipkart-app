import { useContext } from "react"
import ProductContext from "../context - products/ProductContext"
import { Link } from "react-router-dom";

function SingleProduct() {

    const context = useContext(ProductContext);

    const { product } = context;

    const { name, price, imgUrl, company, desc, color, category } = product;

    async function addToCart(){
        const url= "http://localhost:5000/api/product/addtocart";

        const response= await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({name, price, imgUrl, company, desc, color})
        })

        const data= await response.json();

        console.log(data);

        if(data.success)
        {
            alert("Item added to the cart");
        }
        else{
            alert(data.error);
        }
    }


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function handleClick(e)
    {
        e.preventDefault();
        addToCart();
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


                        <p className="property">Category: <span className="value">{category}</span></p>
                        <p className="property">Price: <span className="value">{price}</span></p>

                        {localStorage.getItem("token") &&
                            <Link className="btn btn-secondary btn-sm" onClick={handleClick}>Add to Cart</Link>
                        }

                        <Link className="btn btn-success mx-4 btn-sm" to="/login">Buy Now</Link>

                    </div>

                </div>
            </div>

        </>
    )
}

export default SingleProduct;