import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Category from "./Category";


function Home(props) {

    const [prodArray, setArray] = useState([])

    const { setProgress }= props;

    async function getProducts() {
        
        const response = await fetch("https://api.pujakaitem.com/api/products");

        //console.log(response);

        const data = await response.json();

        setProgress(100);
        setArray(data);
        console.log(data);
    }

    useEffect(function () {
        getProducts();
        // eslint-disable-next-line
    }, [])


    return (
        <>

            <Category />

            <h2 className="my-4 mx-5">Products</h2>

            <div className="row gx-3">

                { prodArray.map((element, index) => {
                    return <div className="col" key={index}>
                        <ProductItem
                            name={element.name}
                            price={element.price}
                            imgUrl={element.image}
                            company={element.company}
                            desc={element.description}
                            color={element.colors}
                            category={element.category}
                        />

                    </div>
                })

                }

            </div>
        </>
    )
}

export default Home;