import React, {useState ,useEffect}from"react";

import './css/App.css'
import Home from './Home'
import About from'./About'
import Services from'./Services'
import Assignment from'./Assignment'
import Contact from'./Contact'
import {Route, Link} from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import MessengerCustormerChat from 'react-messenger-customer-chat';
import NaviBar from "./NaviBar";





function App() {
  
    const [loading, setLoading] = useState(false);

    useEffect( () =>{
       setLoading(true)
       setTimeout(() => {
           setLoading(false)
             },2000) 
              }, []);
  
     return (
          <div className="App" > 
           {  
            loading ? (
              <PulseLoader color={'#36D7B8'} loading={loading}  size={60} />  /*#36D7B8*/
            ) : (

           

     
           <NaviBar/>) }
             <Route exact path="/" component={Home} />
             <Route exact path="/about"component={About} />
             <Route exact path="/services"component={Services} />
             <Route exact path="/assignment"component={Assignment} />
             <Route exact path="/contact"component={Contact} />
   
   
         </div>
      );
    }
   
  export default App; 

