import React from "react";


import icon from "./favicon.png";

const Navbar = () => {
return (
<div id="Navbar">
<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    
    <li class
Name="nav-item">
        <a class
    Name="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
            Home
        </a>
    </li>
    <li class
Name="nav-item">
        <a class
    Name="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
            Profile
        </a>
    </li>
</ul>
<div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        Home Content
    </div>
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        Profile Content
    </div>
    </div> 
    </div>
)

}

export default Navbar;