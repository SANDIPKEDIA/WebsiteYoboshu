import React from 'react';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "../node_modules/bootstrap/dist/jss/bootstrap.bundle.js";

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch, Route,Redirect } from 'react-router-dom';




const App = () =>{
    return(
        <>
        <Navbar/>

        <Switch >

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/" />  {/* if user write anything after forward '/' in url */}
            
        </Switch>
        </>
    )
}


export default App;