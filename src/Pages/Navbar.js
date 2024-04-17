import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container">
        <a class="navbar-brand" href="home"><img src="../../Assests/drivenexus.png" alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src='../../Assests/menu.png' alt="menu" className="menu" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item me-4">
              <a class="nav-link active" aria-current="page" href="home">Home</a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="about">About</a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="services">Services</a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="stock">Stock</a>
            </li>
          </ul>
          <div>
          <button className="btn-1" >Sign In</button>
        </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
