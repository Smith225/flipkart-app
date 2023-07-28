
function Navbar() {

    return (
        <>
            <link rel="stylesheet" href={require("../css/navStyles.css")} />

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" width="130" height="22" alt="Flipkart" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 inputField" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar