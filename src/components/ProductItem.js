import { useContext } from "react";
import ProductContext from "../context - products/ProductContext";
import { Link } from "react-router-dom";

function ProductItem(props) {

    const { name, price, imgUrl, company, desc, color, category } = props;

    const context = useContext(ProductContext);

    const { getProduct } = context;


    function handleClick() {
        getProduct(
            name,
            price,
            imgUrl,
            company,
            desc,
            color,
            category
        )
    }

    function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>

            <div className="card" style={{ width: "18rem", margin: "10%" }}>

                <div style={{ display: "flex", justifyContent: "end", position: "absolute", right: "0" }}>
                    <span className="badge bg-success">
                        {category}
                    </span>
                </div>

                <img src={imgUrl} className="card-img-top" alt="productImg" />


                <div className="card-body">

                    <h4 className="mt-3" style={{ textAlign: "center" }}>{capitalize(name)}</h4>
                    <p className="property">Description :<span className="value">{desc.slice(0, 50)}...</span> </p>
                    <p className="property">Company: <span className="value">{company}</span></p>
                    <p className="property">Price: <span className="value">{price}</span></p>

                    <Link className="btn btn-primary btn-sm" to="/product" onClick={handleClick}>Check out</Link>
                </div>
            </div>
        </>
    )
}

export default ProductItem