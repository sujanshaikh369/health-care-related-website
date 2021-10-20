import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer-main">
                <div className="container my-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-logo-text flex-first">
                                <div>
                                    <h3 className="text-white">FOLLOW US</h3>
                                </div>
                                <div className="icon me-2">
                                    <i className="fab fa-google me-2"></i>
                                    <i className="fab fa-github me-2"></i>
                                    <i className="fab fa-facebook me-2"></i>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 footer-menu me-auto">
                            <ul className="d-flex flex-end">
                                <li className="footer-menu-border">Home</li>
                                <li className="footer-menu-border">Services</li>
                                <li className="footer-menu-border">About</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;