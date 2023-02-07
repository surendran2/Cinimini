import React from "react";

const Navbar = () => {
    if(window.location.href == "http://localhost:3000/mov_index" || window.location.href == "http://localhost:3000/cus_index")
    {
        var menu = 
            <nav class=" navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
            <li class="nav-item d-none d-sm-inline-block">
                    <a href="http://localhost:3000/indexs" class="nav-link">Home</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="about_us" class="nav-link">About Us</a>
                </li>
            </ul>
        </nav>
        
    }
    else if(window.location.href == "http://localhost:3000/indexs" || window.location.href == "http://localhost:3000/index")
    {
        var menu = 
        <nav class=" navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item dropdown d-none d-sm-inline-block">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Index
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="http://localhost:3000/mov_index">Admin Index</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="http://localhost:3000/cus_index">Customer Index</a>
                </div>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="about_us" class="nav-link">About Us</a>
            </li>
        </ul>
    </nav>
    }
    
    return (
        <div>{menu}</div>
        
    )
}
export default Navbar