// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="site-footer">
//       <div className="footer-top">
//         <div className="footer-about">
//           <h3>Bhasaka Technologies</h3>
//           <p>
//             We are committed to building smart digital experiences using AEM and modern frontend technologies.
//           </p>
//         </div>

//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/services">Our Services</a></li>
//             <li><a href="/projects">Projects</a></li>
//             <li><a href="/careers">Careers</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact Us</h4>
//           <p>Email: katkamvamshi@gmail.com</p>
//           <p>Phone: +91 888666 9589</p>
//           <p>Location: Hyderabad, Telangana, India</p>
//         </div>

//         <div className="footer-social">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
//             <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
//             <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
//             <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© 2025 Bhasaka Technologies. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from 'react';

const Footer = () => {
  const [nestedLevel, setNestedLevel] = useState(1); 

  const addNestedCircle = () => {
    setNestedLevel(prevLevel => prevLevel + 1);
  };
console.log("circle",nestedLevel)
  const renderNestedCircles = (level, currentSize = 200) => {
    if (level === 0) {
      return null;
    }

    const nextSize = currentSize * 0.7; 
    const backgroundColor = level % 2 === 0 ? 'red' : 'blue'; 

    return (
     <div>
      <p>p</p>
     </div>
    );
  };

  return (
    <div style={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
      {renderNestedCircles(nestedLevel)}
      <button 
        onClick={addNestedCircle} 
        style={{
          marginLeft: '20px', 
          padding: '10px 20px', 
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Add Nested Circle
      </button>
    </div>
  );
};

export default Footer;

