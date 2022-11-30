import React from "react";
import { Link } from "react-router-dom";

function  App() {
  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="fa-sharp fa-solid fa-house"></i>FirstAPP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link Class="nav-link active" to="/">
                    Home
                  </Link>
        </li>
        <li class="nav-item">
        <Link Class="nav-link active" to="/About">
                  AboutUs
                </Link>
        </li>
        <li class="nav-item">
        <Link Class="nav-link active" to="/Service">
                Service
              </Link>
        </li>
        <li class="nav-item">
        <Link Class="nav-link active" to="/Contact">
               ContactUs
             </Link>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  
    </>
  );
}
export default App;






                  
                
               