import React from 'react';
import "./ViewDetails.css"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function ViewDetails() {
  const navigate = useNavigate();


  return (
    <div className=' viewdetails'>
      <ArrowBackIcon onclick ={() => navigate("/")}/>
      <div className="search_list">
        <div className="name"> <h4>Name</h4> <h6>Name</h6> </div>
        <div className="contact"><h4>Contact</h4><h6>Username</h6></div>
        <div className="city"><h4>City</h4><h6>Email</h6></div>
        <div className="state"><h4>State</h4><h6>Website</h6></div>
      </div>
      <div className='ViewDetails_box'>
        <h2>Description </h2>
        <p>This is test description </p>
      </div>
    </div>
  )
}

export default ViewDetails