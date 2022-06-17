
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../../axios.js"
import {API_KEY, imgUrl} from "../../constants/constants.js"

function Banner() {
  const [Tmovie,setTmovie]=useState([])
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results);
      setTmovie(Response.data.results[10])
      setInterval(function(){   
        const m=Math.floor(Math.random() * 18);
    
        setTmovie(Response.data.results[m])
     }, 10000);
 
    })
  },[])
  return (
    
        <div>
        <div className="hero__bg__image__container">
          <img
            src={`${imgUrl+Tmovie.backdrop_path}`}
            alt="BG hero image"
            className="hero__bg__image"
          />
        </div>
        <div className="hero__bg__overlay"></div>

        <div className="hero__card">
          <h1 className="hero__title">
            {Tmovie.name? Tmovie.name : Tmovie.title},<br />
          </h1>
          <p className="hero__subtitle">Watch anywhere and cancel anytime.</p>
          <p className="hero__description">
            {Tmovie.overview}
          </p>

          <div className="email__form__container">
            <div className="form__container">
              <input type="email" className="email__input" placeholder=" " />
              <label className="email__label">Email Address</label>
            </div>
            <button className="primary__button">
              Get Started <i className="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  
  )
}

export default Banner