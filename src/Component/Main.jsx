import React, { useState } from 'react';
import Mealcard from './Mealcard'; // Adjust path if needed

const Main = () => {
  const [data, setdata] = useState(null);
  const [search, setsearch] = useState('');
  const [error, seterror] = useState('');

  const handlechange = (e) => {
    setsearch(e.target.value);
  };

  const handleclick = async () => {
    if (!search.trim()) {
      setdata(null);
      seterror('Please enter a meal name to search.');
      return;
    }

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const info = await res.json();

      if (info.meals) {
        setdata(info.meals);
        seterror('');
      } else {
        setdata([]);
        seterror('No meals found. Try a different name.');
      }
    } catch (err) {
      console.error(err);
      seterror('Something went wrong while fetching data.');
    }
  };

  return (
    <div className="container">
      <h1 className="main-heading">🍽️ Search Your Favorite Meal</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter the Meal name..."
          value={search}
          onChange={handlechange}
        />
        <button className="btn" onClick={handleclick}>
          Search
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {data === null ? (
        <p className="info">Type a meal name and click "Search" to get started.</p>
      ) : (
        <Mealcard details={data} />
      )}
    </div>
  );
};

export default Main;
