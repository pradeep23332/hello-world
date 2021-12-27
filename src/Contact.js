import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import"./css/contact.css";

const Result =() =>{
    return(
        <p>Your message has been successfully sent. we will contact you soon</p>
    )
}
function Contact(props){
    const [result,showResult] = useState(false);
        const  sendEmail=(e)=> {
        e.preventDefault();

        emailjs.sendForm('service_2w8bb6u' , 'template_iogn0oy',e.target,'user_LhI8JoXO6PLF93n7FSzq0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target .reset();
        showResult(true); 
    }
    // hide result

    setTimeout(() => {
        showResult(false)
    },5000);

        
    
    return(
        
        <div className="ooy">
        <div className="containe1 border"
        style={{marginTop:"0px",
        width:"50%" ,height:"900px",fontSize:"24px",marginLeft:"300px",
        marginTop:"150px",borderRadius:"25px" ,fontFamily:"-moz-initial",
        backgroundColor:"white",color:"black"
        ,backgroundPosition:'center',
        backgroundSize:'cover',}} >
            
        <form action="" onSubmit={sendEmail}>
             <div className="formWord"
             style={{margin: "25px 85px 75px 100px",}}
             onSubmit={{sendEmail}}>
            
                <h2> <b> LET'S GET IN TOUCH  </b> </h2> 
                <br/><br/>

                <span><b>Full Name</b></span>
                <br/>
                <input className="input100" style={{fontSize:"25px",backgroundColor:"#684f4f40"}} type="text" name="fullName" className="form-control" required/>
                <br/>
                <span><b>Phone Number</b> </span>
                <br/>
                <input className="input100" style={{fontSize:"25px",backgroundColor:"#684f4f40"}}type="text" name="phone" className="form-control"required />
                <br/>
                <span><b>Enter Email</b> </span>
                <br/>
                <input className="input100"style={{fontSize:"25px",backgroundColor:"#684f4f40"}} type="text" name="email" className="form-control"required />
                <br/>
                <span><b>Message</b></span>
                <br/>
                <textarea name="message" style={{fontSize:"25px",backgroundColor:"#684f4f40"}}rows = "5"className="form-control" required></textarea>
                <br/>
                <input type ="submit" value="Send" className="form-control btn btn-primary"  style={{marginTop:'20px',fontSize:"22px"}}/>
            
            
             
                     <div className="row">{
                     result ? <Result/> : null} </div>

 
                  
            </div>
            
        </form>
        </div>
      
      
      
        <div className="container"
        style={{marginTop:"-900px", marginLeft:"1650px", 
        width:"25%" ,height:"600px",backgroundColor:"#8b1b13",color:"white"
        ,backgroundPosition:'center', fontFamily:"Calibri", fontSize:"30px",position:"fixed",
        backgroundSize:'cover',borderRadius:'30px',disply:"flex"}} >
           
           <br/>
              <ul>Phone Number</ul>
              <ul> 011-1111111</ul><br/>
              <hr/>

              <ul> Email Address</ul>
              <ul> unilinkcollege@gmail.com</ul><br/>
              <hr/>

              <ul>Street Address</ul>
              <ul> colombo 10</ul><br/>
            
          </div>
        </div>
    )
}

export default Contact;