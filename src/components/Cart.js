import { useState, useEffect } from "react";
import CartItem from "./CartItem";


function Cart() {

    const [products, setProducts] = useState([]);

    async function myProducts() {

        const url = "http://localhost:5000/api/product/getproducts";

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem("token")
            }
        });
        const data = await response.json();

        console.log(data);
        setProducts(data.products);
    }

    useEffect(function () {
        myProducts();
        console.log(products);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="container my-4">

                <h2 className="my-3">Cart</h2>

                <div>

                    {(products.length=== 0)? <p>The cart is empty. Please add products.</p>
                        :
                    products.map((element, index) => {
                        return <div key={index} >
                            <CartItem
                                productId={element._id}
                                name={element.name}
                                price={element.price}
                                imgUrl={element.imgUrl}
                                company={element.company}
                                desc={element.desc}
                                color={element.color} />
                        </div>
                    })}

                </div>

            </div>


        </>
    )
}

export default Cart