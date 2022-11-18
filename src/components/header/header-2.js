/* eslint-disable */
import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
  
    function handleLogOut(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        navigate('/')
    }

    return(
       <div>
            <header>
                <div className="navbar-container fixed-top">
                    <nav className="navbar navbar-expand-lg ms-auto navbar-light">
                    <div className="container-md">
                    <Link to='/'className="logo"></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <div className="logo offcanvas-title" id="offcanvasNavbarLabel"></div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                            <div className="offcanvas-body">
                                <ul className="nav nav-pills ms-auto list-unstyled navbar-nav d-flex gap-3">
                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="#our-services">Our Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="#why-us">Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="#testimonial">Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="#faq">FAQ</a>
                                    </li>
                                    <li className="nav-item d-flex gap-2">
                                        <button type="button" className="btn">Register</button>
                                        <button type="button" className="btn" onClick={handleLogOut}>LogOut</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className="container hero-sec">
                    <div className="row">
                        <div className="col-lg desc-car">
                            <h1>Sewa & Rental Mobil Terbaik di Kawasan Bekasi</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br />untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div className="col-lg car">
                            <img src={require('../../assets/images/Mercedes Car EQC 300kW Edition - 900x598 1.png')} alt='Mercedes'/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header