import React, { useState } from 'react';
import { Data } from './Data';

const Foodapp = () => {
  const [storedata, setstoredata] = useState(Data);
  const [input, setinput] = useState("");

  const handlechange = (e) => {
    setinput(e.target.value.toLowerCase());
  };

  const filterout = storedata.filter((curvalue) => {
    return (
      curvalue.name.toLowerCase().includes(input) ||
      curvalue.brand.toLowerCase().includes(input)
    );
  });

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          placeholder="Search Here..."
          onChange={handlechange}
        />
      </div>

      <div className="data">
        {filterout.map((curvalue, index) => (
          <div className="items" key={index}>
            <p><strong>Name:</strong> {curvalue.name}</p>
            <p><strong>Brand:</strong> {curvalue.brand}</p>
            <div className="img-container">
              <strong>Image:</strong>
              <img src={curvalue.img} alt={curvalue.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodapp;
