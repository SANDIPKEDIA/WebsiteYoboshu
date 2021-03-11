import React from "react";
// import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (
    <>
   
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
            <p className="card-text"><b>Experience:10&nbsp;+years</b></p>
            <p className="card-text"> Expertise:Aerobics,Dance,Zumba,Bhangra</p>
            <p className="card-text"> Online(Google Meet)</p>
            <p className="card-text"> <b>₹600/session</b></p>
            </p>
            <a href="https://play.google.com/store/apps/details?id=in.yoboshu.yoboshu" className="btn btn-primary">
              BOOK
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
