import React from 'react'

const DisplayDataByCategory = ({ category }) => {
    const data = JSON.parse(localStorage.getItem('formData')) || [];
    const filteredData = data.filter(item => item.category === category);
  
    return (
      <div>
        <h2>{category}</h2>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>
                {item.image && <img src={item.image} alt="Uploaded" style={{ width: 100, height: 100 }} />}
                
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              {/* Display image here if needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default DisplayDataByCategory