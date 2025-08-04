import React, { useEffect, useState } from "react";
import "./UseEffectTask.css";

const UseEffectTask = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchingData();
  }, []);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <>
      <h1 className="title-heading">UseEffectTask</h1>

      <div className="container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : (
          data.map((item) => (
            <div key={item.id} className="product">
              <h2 className="product-hea">{item.title}</h2>
              <img
                className="product-image"
                alt={item.title}
                src={item.image}
                onError={handleImageError}
              />
              <p className="product-description">{item.description}</p>
              <p className="product-price">Price: ${item.price}</p>
              <p className="product-category">Category: {item.category}</p>
              <p className="product-rating">
                Rating: {item.rating?.rate} ({item.rating?.count} reviews)
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UseEffectTask;
