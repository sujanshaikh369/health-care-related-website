import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo/logo_home.jpg'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bgcolor">
                <div className="container">
                    <div>
                        <h1>Frieds Gym</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to="/home" className="nav-link">
                                <li className="nav-link active" aria-current="page">Home</li>
                            </Link>
                            <Link to="/about" className="nav-link">
                                <li className="nav-link active" aria-current="page" >About</li>
                            </Link>
                            <Link to="/training" className="nav-link">
                                <li className="nav-link active" aria-current="page" >Training</li>
                            </Link>
                            <Link to="/hiitzone" className="nav-link">
                                <li className="nav-link active" aria-current="page" >Hiitzone</li>
                            </Link>
                            <Link to="/login" className="nav-link">
                                <li className="nav-link active" aria-current="page" >Login</li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className="navbar-down-border">

            </div>
        </div>
    );
};

export default Header;