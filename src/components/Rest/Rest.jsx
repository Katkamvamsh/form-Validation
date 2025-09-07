import React from "react";
import "./Rest.css"; 

const data = [
  {
    id: 1,
    name: "Laptop",
    price: "₹45,000",
    description: "A powerful laptop with the latest processor, SSD storage, and sleek design for both work and entertainment.",
    image: "https://via.placeholder.com/200x200.png?text=Laptop",
  },
  {
    id: 2,
    name: "Mobile",
    price: "₹35,000",
    description: "A high-performance smartphone with a stunning display, fast charging, and excellent camera quality.",
    image: "https://via.placeholder.com/200x200.png?text=Mobile",
  },
  {
    id: 3,
    name: "Speakers",
    price: "₹8,999",
    description: "Wireless Bluetooth speakers with deep bass, crystal clear sound, and long battery life for parties.",
    image: "https://via.placeholder.com/200x200.png?text=Speakers",
  },
  {
    id: 4,
    name: "Clothes",
    price: "₹1,599",
    description: "Trendy and comfortable clothes made from high-quality fabric, perfect for daily wear and fashion lovers.",
    image: "https://via.placeholder.com/200x200.png?text=Clothes",
  },
  {id: 4,
    name: "Clothes",
    price: "₹1,599",
    description: "Trendy and comfortable clothes made from high-quality fabric, perfect for daily wear and fashion lovers.",
    image: "https://via.placeholder.com/200x200.png?text=Clothes",
  }
];



const [first, second, ...rest] = data;

const Rest = () => {
  return (
    <div className="rest-container">
      <h1 className="title">Products Showcase Using by Rest operater</h1>
     
      <div className="highlight-container">
        {[first, second].map((item) => (
          <div className="card highlight-card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-img" />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-desc">{item.description}</p>
            <h3 className="card-price">{item.price}</h3>
          </div>
        ))}
      </div>

      {/* Remaining Products */}
      <div className="grid-container">
        {rest.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-img" />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-desc">{item.description}</p>
            <h3 className="card-price">{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rest;
