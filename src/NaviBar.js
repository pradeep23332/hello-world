import React from "react";
import './css/navi.css';
import { Link } from "react-router-dom";

function NaviBar(){
    return(
        <div>
             <div class="logo">
                <p><b>UniLink</b></p>
                </div>
            < ul class="menu">
            

            <li class="menu"><Link to="/contact"><b>CONTACT</b></Link></li>
            <li class="menu"><Link to="/assignment"><b>ASSIGNMENT GUIDENCE</b></Link></li>
            <li class="menu"><Link to="/services"><b>SERVICES</b></Link></li>
            <li class="menu"><Link to="/about"><b>ABOUT US</b></Link></li>
            <li class="menu"><Link to="/"><b>HOME</b></Link></li>
            </ul>

           
     
     </div>

    );  
}
export default NaviBar;