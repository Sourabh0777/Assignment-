import React from 'react'
import { useNavigate } from "react-router-dom";
import SearchField from '../SearchField/SearchField'
import "./SearchList.css"

function SearchList({ key, name, image, time, healthscore, sourcename, summary }) {
  const navigate = useNavigate();

  return (
    <div className="search_list" key={key}>
      <div className="name"> <h4>Name</h4> <h6>{name}</h6> </div>
      <div className="healthsc"><h4>Health Score</h4> <h6>{healthscore}</h6></div>
      <div className='search_list_image'><img src={image} alt="" /></div>
      <button className='viewDetails' onClick={() => navigate("/ViewDetails")} >View details</button>

    </div>
  )
}

export default SearchList