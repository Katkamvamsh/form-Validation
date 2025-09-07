import { useState } from "react";
import "./Circle.css";
const Circle = () => {
  const [nestedCircle, setNestedCircle] = useState([]);

  console.log("added", nestedCircle);

  const addcircle = () => {
    setNestedCircle([...nestedCircle, 1]);
  };

  return (
    <>
      {nestedCircle.map((value, index) => {
        const size = 100- index * 30;
        console.log("size", size);
        return (
          <div className="main">
          <div
            key={index}
            className="circle"
            style={{ "--size": `${size}px` }}
          ></div>
          </div>
        );
      })}
      <div>
        <button onClick={addcircle}>Add</button>
      </div>
    </>
  );
};

export default Circle;
