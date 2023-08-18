import { useState } from "react";
import ProductContext from "./ProductContext.js";

function ProductState(props) {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        imgUrl: "",
        company: "",
        desc: "",
        color: "",
        category: ""
    })

    function getProduct(name, price, url, company, desc, color, category) {
        setProduct({
            name: name,
            price: price,
            imgUrl: url,
            company: company,
            desc: desc,
            color: color,
            category: category
        })
    }


    return (
        <ProductContext.Provider value={{product, getProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;