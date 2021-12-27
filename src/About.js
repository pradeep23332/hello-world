import React from 'react'
import './css/about.css'
import mission from "./Images/mission.png";
import vision  from "./Images/vision.png";
import values  from "./Images/values.png";
import abb     from "./Images/abb.jpg";


function About() {
   return (

    <div className="loop"
         style={{ color: "white", fontFamily: "sans-serif", fontSize: "50px", marginTop: "-18px" }}>
         <br /><br /><br/>
         <b> A Few Facts About Our College</b>




         <div className="container44">

           <br />
              <div className="container33"
                 style={{
                 marginTop: "330px", marginLeft: "700px",
                 width: "40%", height: "780px", backgroundColor: "#4d95d840", color: "white"
                 , backgroundPosition: 'center', fontFamily: "calibri", fontSize: "33px", position: "fixed",
                 backgroundSize: 'cover', borderRadius: '1px', disply: "flex"
               }} >
                    <img src={abb} alt=""
                    style={{
                    width: "912px",
                    height: "473px",
                    marginLeft: " -0px",
                    marginTop: "1px ",
                    imgBorderRadius: "50px"
                     }} />

                       <p><br />Unilink College of Higher Education is an upcoming private institute in higher education sector. Our passion is to create a platform to educate students who are pursuing higher education in Sri Lanka or abroad.  </p>
              </div>

                 <br /><br />


        <div className="container"
              style={{
              marginTop: "1110px", marginLeft: "250px",
              width: "25%", height: "600px", backgroundImage: 'url("https://cdn.cnn.com/cnnnext/dam/assets/190729170106-african-voices-changemakers-background-large-169.jpg")', color: "white"
              , backgroundPosition: 'center', fontFamily: "inherit", fontSize: "30px", position: "fixed",
              backgroundSize: 'cover', borderRadius: '30px', disply: "flex"
               }}  >
                    <img src={vision} alt=""
                    style={{
                    width: "90px",
                    height: "90px",
                    marginLeft: " 8px",
                    marginTop: "30px "
                  }} />
                   <p> VISION  <br /><br />
                        One day, all children in this nation will have the opportunity to attain an excellent education.

                   </p>
         </div>





        <div className="container"
             style={{
             marginTop: "1110px", marginLeft: "880px",
             width: "25%", height: "600px", backgroundImage: 'url("https://i.pinimg.com/474x/c4/55/d3/c455d3c28d3fa09f04753e9db783e804.jpg")', color: "white"
             , backgroundPosition: 'center', fontFamily: "inherit", fontSize: "30px", position: "fixed",
             backgroundSize: 'cover', borderRadius: '30px', disply: "flex"
             }}>
                   <img src={mission} alt=""
                   style={{
                   width: "90px",
                   height: "90px",
                   marginLeft: " 8px",
                   marginTop: "30px "
                    }} />
                     <p> MISSION <br /><br />
                        <b> Our mission is oragnize the world's education and make it universally accessible and useful</b>
                    </p>
        </div>






        <div className="container"
             style={{
             marginTop: "1110px", marginLeft: "1500px",
             width: "25%", height: "600px", backgroundImage: 'url("https://media.istockphoto.com/photos/night-sky-with-stars-and-clouds-picture-id532378051?b=1&k=20&m=532378051&s=170667a&w=0&h=K-6-sbYMHOM7i7yqFFdI0VCmFOY03rLAQMHxHObJUGY=")', color: "white"
             , backgroundPosition: 'center', fontFamily: "inherit", fontSize: "30px", position: "fixed",
             backgroundSize: 'cover', borderRadius: '30px', disply: "flex"
             }}>
                 <img src={values} alt=""
                  style={{
                     width: "90px",
                     height: "90px",
                     marginLeft: " 8px",
                     marginTop: "30px "
                     }} />
                <p> VALUES <br /><br /></p>

                ###########
        </div>





      </div>




    </div>


  )
}
export default About;