import React, { useContext } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from '../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { hello, rahad } = useContext(Context);
    return (
        <nav className="navbar main-navbar navbar-expand-lg ms-lg-5  sticky-top bg-muted mt-3">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand h3 logo linear-text">ZERODHA</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ color: 'white' }}
                >
                    <RxHamburgerMenu />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto gap-lg-3 mb-2 mb-lg-0">
                        <Link to='/signup' className="nav-item">
                            <a className="nav-link" href="#">Signup</a>
                        </Link>
                        <Link to='/about' className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </Link>
                        <Link to='/product' className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </Link>
                        <Link to='/pricing' className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </Link>
                        <Link to='support' className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </Link>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <button className="btn btn-outline-primary ms-2">SignUp</button>
                    </form>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
