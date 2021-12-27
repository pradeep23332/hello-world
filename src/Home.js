import React, { useState } from 'react'
import"./css/home.css";
import on from "./Images/on.mp4";
import smm from "./Images/smm.png"
import marketing from "./Images/marketing.jpg"
import yyy from "./Images/yyy.png"
import hrm from "./Images/hrm.jpg"
import ooob from "./Images/ooob.jpg"
import moon from "./Images/moon.jpg"
import edu from "./Images/edu.png"
import tech from "./Images/tech.png"
import sup from "./Images/sup.png"



 const Home = () =>{
     let time = new Date().toLocaleTimeString();

     const [Ctime,setCtime] = useState(time);
     const updateTime = ()=>{
         time = new Date().toLocaleTimeString();
         setCtime(time);
     }

     setInterval(updateTime, 1000);
     return(
        
        
         <div className="oop">
         <div className="hhh">
              <video width="100%"
                  autoPlay loop muted>
                 <source src={on} type="video/mp4"/>
             </video>
        </div>

        <div className="container1">
        
        <div className="ttt"
             style={{width:"360" ,height:"640",marginLeft:"2000px",marginTop:"-1290px",fontSize:"42px",}}>
              {time}

        <div className="container5"
            style={{ marginLeft:"-1300px",marginTop:"300px",
            width:"300%" ,height:"50%",textAlign:"left",fontSize:"45px" }}>

                <h3>HELLO STUDENTS</h3><br/>
                <b>WELCOME TO UNILINK-COLLEGE</b>
        </div>

       
            <br/>
               <button class="button"><a href="http://localhost:3000/contact"> Join With Us  </a></button>

        </div>
     
   
   
        <div className="container"
        style={{marginTop:"2750px", marginLeft:"1800px", 
        width:"20%" ,height:"300px",backgroundColor:"#582424b3",color:"white"
        ,backgroundPosition:'center', fontFamily:"inherit", fontSize:"28px",position:"fixed",
        backgroundSize:'cover',borderRadius:'30px',disply:"flex"}}
        >
          
           <br/>
              <ul>Phone Number</ul>
              <ul> 011-1111111</ul>
                <hr/>

              <ul> Email Address</ul>
              <ul> unilinkcollege@gmail.com</ul>
            

           

           
         </div>


        <div className="container333"
            style={{marginTop:"850px", marginLeft:"300px", 
            width:"20%" ,height:"280px",backgroundColor:"black",color:"white",textAlign:"center"
           ,backgroundPosition:'center', fontFamily:"sans-serif", fontSize:"30px",position:"fixed",
            backgroundSize:'cover',borderRadius:'30px',disply:"flex"}}>
          
              <br/><br/>
                 Any subject from Management discipline 
           
        </div>








          <div className="container"
              style={{marginTop:"480px", marginLeft:"450px", 
              width:"19%" ,height:"260px",backgroundImage:'url("https://www.colorhexa.com/8b1b13.png")',color:"white"
              ,backgroundPosition:'center',fontFamily:"Arial",  fontSize:"30px",position:"fixed",
              backgroundSize:'cover',borderRadius:'30px',disply:"flex"}} >
          
               <img src={edu}alt=""
               style={{ 
                 width:"100px",
                 height: "100px",
                 marginLeft:" 150px",
                 marginTop:"30px "}}/>

                 <br/><br/>

                     <p><center> Best Teachers </center> <br/><br/> </p>
          </div>



          <div className="container"
               style={{
                 marginTop:"480px", marginLeft:"1000px", 
                 width:"19%" ,height:"260px",backgroundImage:'url("https://www.colorhexa.com/8b1b13.png")',color:"white"
                 ,backgroundPosition:'center', fontFamily:"Arial", fontSize:"30px",position:"fixed",
                 backgroundSize:'cover',borderRadius:'30px',disply:"flex"}}>


               <img src={tech}alt=""
               style={{
                   width:"100px",
                   height: "100px",
                   marginLeft:" 150px",
                   marginTop:"30px "}}/>
                
                  <br/><br/>
          
                    <p><center> Best Education </center> <br/><br/> </p>
          </div>




          <div className="container"
               style={{
                marginTop:"480px", marginLeft:"1550px", 
                width:"19%" ,height:"260px",backgroundImage:'url("https://www.colorhexa.com/8b1b13.png")',color:"white"
                ,backgroundPosition:'center', fontFamily:"Arial", fontSize:"30px",position:"fixed",
                backgroundSize:'cover',borderRadius:'30px',disply:"flex"}}>
          
                <img src={sup}alt=""
                style={{
                   width:"100px",
                   height: "100px",
                   marginLeft:" 150px",
                   marginTop:"30px "}}/>
             
                  <br/><br/>
          
                     <p><center> Student Support service</center> <br/><br/> </p>
          </div>

         
         
         
         <div className="all"
           style={{marginLeft:"300px"}}>
       
           <div class="vook">
             <div class="car">
               <div class="imgbox">
                 <img src={moon} alt="Marketing"></img>
             
               </div>
                   <div class="content">
                     <h2><b>Management</b></h2>
                     <hr/>
                     <p1>Management (or managing) is the administration of an organization, whether it is a business, a non-profit organization, or a government body. </p1>
                 
                    </div>
               </div>
            </div>


          
          
           <div class="hook">
           <div class="car">
             <div class="imgbox">
               <img src={smm} alt="Marketing"></img>
             
            </div>
               <div class="content">
                 <h2><b>Strategic Management</b></h2>
                 <hr/>
                 <p1>Strategic management is the ongoing planning, monitoring, analysis and assessment of all necessities an organization needs to meet its goals and objectives. Changes in business environments will require organizations to constantly assess their strategies for success. </p1>
                 
               </div>
             </div>
           </div>


          
          
           <div class="took">
           <div class="car">
             <div class="imgbox">
               <img src={ooob} alt="Marketing"></img>
             
             </div>
               <div class="content">
                 <h2><b>Organizational Behavio</b></h2>
                 <hr/>
                 <p1>Organizational behavior is the study of both group and individual performance and activity within an organization. ... It is the systematic study and application of knowledge about how individuals and groups act within the organizations where they work. OB draws from other disciplines to create a unique field. </p1>
                 
               </div>
             </div>
           </div>


           <div class="uook">
           <div class="car">
             <div class="imgbox">
               <img src={marketing} alt="Marketing"></img>
             
             </div>
               <div class="content">
                 <h2><b>Marketing</b></h2>
                 <hr/>
                 <p1> Marketing is the process of intentionally stimulating demand for and purchases of goods and services; potentially including selection of a target audience; selection of certain attributes or themes to emphasize in advertising; operation of advertising campaigns</p1>
                 
               </div>
             </div>
           </div>


           <div class="look">
           <div class="car">
             <div class="imgbox">
               <img src={hrm} alt="Marketing"></img>
             
             </div>
               <div class="content">
                 <h2><b>Human Resource Management</b></h2>
                 <hr/>
                 <p1>Human resource management (HRM) is the practice of recruiting, hiring, deploying and managing an organization's employees. HRM is often referred to simply as human resources (HR). ... HRM is employee management with an emphasis on those employees as assets of the business. </p1>
                 
               </div>
             </div>
           </div>


           <div class="kook">
           <div class="car">
             <div class="imgbox">
               <img src={yyy} alt="Marketing"></img>
             
             </div>
               <div class="content">
                 <h2><b>Strategic Human Resource Management </b></h2>
                 <hr/>
                 <p1>Strategic human resource management involves a future-oriented process of developing and implementing HR programs that address and solve business problems and directly contribute to major long-term business objectives. ... Strategic planning presents great challenges and opportunities for HR professionals.</p1>
                 
                 
               </div>
             </div>
           </div>
           </div>



</div>
</div>      

)
}
export default Home;