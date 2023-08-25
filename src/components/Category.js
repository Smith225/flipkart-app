
function Category() {

    return (
        <>

            <link rel="stylesheet" href={require("../css/styles.css")} />

            <div className="catBox">

                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="img" />
                    <p>Top Offers</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="img" />
                    <p>Grocery</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="img" />
                    <p>Mobile</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="img" />
                    <p>Fashion</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="img" />
                    <p>Electronics</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100" alt="img" />
                    <p>Home</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="img" />
                    <p>Appliances</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="img" />
                    <p>Travel</p>
                </div>
                <div className="catItem">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="img" />
                    <p>Beauty, Toys & More</p>
                </div>
            </div>




            {/* Caraosel */}

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50" className="d-block w-100" alt="banner1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50" className="d-block w-100" alt="banner2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50" className="d-block w-100" alt="banner4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category