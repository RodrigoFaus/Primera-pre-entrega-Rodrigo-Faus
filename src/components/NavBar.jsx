import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
            <div className="container-fluid color30-fontw">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <h1>The Food market</h1>
                    <img src={"assets/banner.png"} alt="" width={500} />
                </div>              
                <nav className="navbar navbar-expand-lg d-flex flex-column container-fluid">
                    <div className="container-fluid row">
                        <div className="col-md-1"></div>
                        <div className="collapse navbar-collapse d-flex col-md-9" id="navbarNav">
                            <ul className="navbar-nav d-flex gap-navbar justify-content-center fs-5 w-100">
                                <li className="nav-item ">
                                <a className="nav-link active text-light btn-efecto hvr-grow-shadow" aria-current="page" href="">Home</a>
                                </li>
                                <li className="nav-item ">
                                <a className="nav-link text-light btn-efecto hvr-grow-shadow " href="">Productos</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-light btn-efecto hvr-grow-shadow" href="">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-light btn-efecto hvr-grow-shadow" href="" tabIndex={"-1"} aria-disabled="true">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                        <CartWidget/>
                    </div> 
                </nav>    
            </div> );
}
 
export default NavBar;
