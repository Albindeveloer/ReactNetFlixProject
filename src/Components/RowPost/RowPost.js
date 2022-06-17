import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from "../../axios.js"
import {imgUrl} from '../../constants/constants'

function RowPost(props) {
  const [Omovie,setOmovie]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log("orginaleess",response.data.results);
      setOmovie(response.data.results)


    })

  },[])
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
    {
      Omovie.map((obj)=>{
        return(
        <img className={`${props.isSmall ? "small-poster" : "poster"}`} alt='poster' src={`${imgUrl+obj.backdrop_path}`} />

        )

      })
    }
    </div>
</div>
  )
}

export default RowPost