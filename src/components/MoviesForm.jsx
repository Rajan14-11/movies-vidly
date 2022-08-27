import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
function MoviesForm() {

    const id = useParams()
    const Navigate= useNavigate()

  return (
    <div>
        <h1>MoviesForm {id.id}</h1>
        <button className="btn btn-primary" onClick={()=>Navigate("/")}>Save</button>
    </div>
  )
}

export default MoviesForm