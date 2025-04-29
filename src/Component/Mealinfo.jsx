import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [para, setpara] = useState(null);

  useEffect(() => {
    const fetchapi = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const info = await res.json();
        console.log(info.meals[0]);
        setpara(info.meals[0]);
      } catch (error) {
        console.error("Failed to fetch meal data", error);
      }
    };

    fetchapi();
  }, [mealid]); // runs when mealid changes

  return (
    <div>
      {!para ? (
        <p>Loading or no information found...</p>
      ) : (
        <div className='mealinfo'>
          <h1>Recipe Details</h1>
          <h2>{para.strMeal}</h2>
          <img src={para.strMealThumb} alt={para.strMeal} width="300" />
          <h3>Instructions</h3>
          <p>{para.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
