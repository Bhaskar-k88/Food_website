import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcard = ({ details }) => {
    console.log(details)
    return (
        <div className='mealcard'>
        
        {!details ? "" : 
              details.map((curval)=>{
                return (
                    <div className='meals'>
                       <img src={curval.strMealThumb} alt="" width={230} />
                        <p>{curval.strMeal}</p>
                        <NavLink to={`/${curval.idMeal}`}><button>Recipe</button></NavLink>
                    </div>
                )
              })
        }

        </div>
    )
}

export default Mealcard
