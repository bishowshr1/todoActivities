import React from 'react'
import { useLocation, useParams } from "react-router"

const Detail = () => {
  const { id } = useParams();

  const { state } = useLocation();
  console.log(state)

  return (
    <div>
      <h1>{state.strMeal}</h1>
      <img src={state.strMealThumb} alt="" />
      <p>{state.strInstructions}</p>

    </div>
  )
}

export default Detail
