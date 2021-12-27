import React from 'react'
import"./css/service.css"

import ser1 from "./Images/ser1.jpg"
import ser2 from "./Images/ser2.png"
import ser3 from "./Images/ser3.jpg"
import ser4 from "./Images/ser4.jpg"
import ser5 from "./Images/ser5.jpg"
import ser6 from "./Images/ser6.jpeg"
function Services(){
    return(
        
        <div className="ook"
        style={{color:"white",fontSize:"30px"}}>
          <br/>
          <center><h2><b> SERVICES</b> </h2></center>

         <br/>
     
         
         <div class="vool">
           <div class="card">
             <div class="imgBx">
               <img src={ser2} alt=""></img>
             </div>
             <div class="contentBx">
               <div class="content">
                 <h3>post 1</h3>
                 <p>service 1  call back</p>
               </div>
             </div>
           </div>


         
           <div class="card">
             <div class="imgBx">
               <img src={ser1} alt=""></img>
             </div>
             <div class="contentBx">
               <div class="content">
                 <h3>post two</h3>
                 <p>wrefdg woof woof dffef </p>
               </div>
             </div>
           </div>


          
           <div class="card">
             <div class="imgBx">
               <img src={ser3} alt=""></img>
             </div>
             <div class="contentBx">
               <div class="content">
                 <h3>post three</h3>
                 <p>wrefdg woof woof dffef </p>
               </div>
             </div>
           </div>

          
         
           <div class="card">
             <div class="imgBx">
               <img src={ser4} alt=""></img>
             </div>
             <div class="contentBx">
               <div class="content">
                 <h3>post four</h3>
                 <p>wrefdg woof woof dffef </p>
               </div>
             </div>
           </div>

           


           <div class="card">
             <div class="imgBx">
               <img src={ser5} alt=""></img>
             </div>
             <div class="contentBx">
               <div class="content">
                 <h3>post five</h3>
                 <p>wrefdg woof woof dffef </p>
               </div>
             </div>
           </div>


           <div class="card">
             <div class="imgBx">
               <img src={ser6} alt=""></img>
             </div>
             <div class="contentBx">
               <div class="content">
                 <h3>post six</h3>
                 <p>wrefdg woof woof dffef </p>
               </div>
             </div>
           </div>


         </div>

        
        
        
        
        
        
        
        
        
        </div>
            
                    

        
        
        
        
    )
}
export default Services;