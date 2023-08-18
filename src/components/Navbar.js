import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <>
            <link rel="stylesheet" href={require("../css/navStyles.css")} />

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img className="logo" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" width="130" height="22" alt="Flipkart" />

                    {localStorage.getItem("token") ?
                        <div>
                            <Link className="btn btn-primary btn-sm mx-3" to="/cart" type="submit">Cart</Link>
                            <Link className="btn btn-primary btn-sm mx-3" to="/account" type="submit">Account</Link>
                            <Link className="btn btn-primary btn-sm mx-3" onClick={handleClick}>Logout</Link>
                        </div>:
                        <div>
                            <Link className="btn btn-primary btn-sm" to="/signup" type="submit">Sign Up</Link>
                            <Link className="btn btn-primary btn-sm mx-3" to="/login" type="submit">Login</Link>
                        </div>
                    }


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 inputField" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;