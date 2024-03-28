import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaSun, FaMoon } from 'react-icons/fa';


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Additional code to switch between light and dark themes
    // You can set the background color here based on `isDarkMode` state
    document.body.style.backgroundColor = isDarkMode ? '#141C2F' : '#ecece2';
  
};

  // Apply different styles based on dark mode
  const headerStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
};

  return (
    <>
    <div className="header" id="header" style={headerStyle}>
      <nav className={`Top ${isOpen ? "open" : ""}`} id="nav">
        <img className='Logo' src={Logo} alt="Lique" />
        
        <div className='right'>
          <div>
            <button className='moon' onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        <ul className={`navlist ${isOpen ? "open" : ""}`}>
          <li><a className="homie" href="#first">Home</a></li>
          <li><a href="#second">Services</a></li>
          <li><a href="#third">Skills</a></li>
          <li><a href="#fourth">Works</a></li>
          <li><a href="#fifth">Resume</a></li>
          <li className="active">Testimonials</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>

    </>
  );
}




// import React, { useState } from 'react'
// import Logo from '../img/logo.png'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
// import { FaSun, FaMoon } from 'react-icons/fa';


// export default function Nav() {

//     const [isOpen, setIsOpen] = useState(false);
   
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };

//     const ThemeToggleIcon = () => {
//       const [isDarkMode, setIsDarkMode] = useState(false);
    
//       const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//         // Code to switch between light and dark themes based on `isDarkMode`
//       };
//     }

//   return (
//     <div className="header" id="header">
//       <nav className={`Top ${isOpen ? "open" : ""}`} id="nav">
//       <img className='Logo' src={Logo} alt="Lique" />
//         <div className="hamburger" onClick={toggleMenu}>
//           {isOpen ? <IoClose /> : <GiHamburgerMenu />}
//         </div>
//         <div>
//         <button onClick={toggleTheme}>
//       {isDarkMode ? <FaSun /> : <FaMoon />}
//     </button>
//         </div>

//         <ul className={`navlist ${isOpen ? "open" : ""}`}>
//           <li><a className="homie" href="#first">Home</a></li>
//           <li><a href="#second">Services</a></li>
//           <li><a href="#third">Skills</a></li>
//           <li><a href="#fourth">Works</a></li>
//           <li><a href="#fifth">Resume</a></li>
//           <li className="active">Testimonials</li>
//           <li>Pricing</li>
//           <li>Blog</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }



