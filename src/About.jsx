import React from 'react';
import web from "../src/images/contact.svg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";


const About = () =>{
    return(
        <>
            <Common name="About" imgsrc={web} visit="https://yoboshu.com/" btname="Visit Website" desc="We provide FITNESS TOOLS. User our in-build fitness tools such as BMI calculator,Macro calculator,calorie tracker etc. Also currently we provide the following services:&nbsp;
1.&nbsp;Money Back Gurantee
2.&nbsp;Certified Trainer
3.&nbsp;Flexible Pricing
& Many more Features we have. To know More about YOBOSHU & want to stay fit please download YOBOSHU"/>
        </>
    )
}


export default About;