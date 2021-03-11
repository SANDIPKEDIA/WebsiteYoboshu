import React from "react";
import web from "../src/images/contact.svg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
         <Common name="Find Trainers & Workout Anywhere" imgsrc={web} visit="https://play.google.com/store/apps/details?id=in.yoboshu.yoboshu" btname="Download App" desc="On yoboshu you can do filtered search for trainers
our trainers can train with you anywhere be it in your home, park ,office or outdoors.
We provide virtual and in-person training both." />

    </>
  );
};

export default Home;
