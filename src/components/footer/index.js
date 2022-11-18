/* eslint-disable */
import React from 'react';
function Footer() {
    return(
        <footer>
            <div className="container d-flex flex-row flex-wrap justify-content-between footer-container" id="footer">
                <div className="alamat">
                <p>Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000</p>
                <p className="a-center">binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
                </div>
                <div className="nav-footer">
                    <ul className="list-unstyled">
                        <li>
                        <a href="/#our-services" className="text-decoration-none text-reset">Our Services</a>
                        </li>
                        <li>
                        <a href="/#why-us" className="text-decoration-none text-reset">Why Us</a>
                        </li>
                        <li>
                        <a href="/#testimonial" className="text-decoration-none text-reset">Testimonial</a>
                        </li>
                        <li>
                        <a href="/#faq" className="text-decoration-none text-reset">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="connect">
                    <p>Connect with us</p>
                    <img src={require("../../assets/images/icon_facebook.png")} alt="facebook"/>
                    <img src={require("../../assets/images/icon_instagram.png")} alt="instagram"/>
                    <img src={require("../../assets/images/icon_twitter.png")} alt="twitter"/>
                    <img src={require("../../assets/images/icon_mail.png")} alt="mail"/>
                    <img src={require("../../assets/images/icon_twitch.png")} alt="twitch"/>
                </div>
                <div className="copyright">
                    <p>Copyright Binar 2022</p>
                    <div className="logo"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer