import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
     const [sticky, setSticky] = useState(false);

     const changeSticky = () => {
       if (window.scrollY >= 80) {
         setSticky(true);
       } else {
         setSticky(false);
       }
     };
  window.addEventListener('scroll', changeSticky);
  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    

  return (
    <div className={sticky ? 'header scrolled' : 'header'}>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo">
              CodeBucks
              <i className="fa fa-code"></i>
            </NavLink> */}
          <div className="nav-logo">
            Portfolio
            <i className="fa fa-code"></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              {/* <NavLink
                  exact
                  to="/"
                  activeclassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink> */}
              <a href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
              {/* <NavLink
                  exact
                  to="/about"
                  activeclassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink> */}
            </li>
            <li className="nav-item">
              <a href="#services">Service</a>
              {/* <NavLink
                  exact
                  to="/blog"
                  activeclassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Blog
                </NavLink> */}
            </li>
            <li className="nav-item">
              <a href="#projects">Projects</a>
              {/* <NavLink
                  exact
                  to="/contact"
                  activeclassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink> */}
            </li>
            <li className="nav-item">
              <a href="#blog">Blog</a>

              {/* <NavLink
                  exact
                  to="/blog"
                  activeclassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Blog
                </NavLink> */}
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
              {/* <NavLink
                  exact
                  to="/contact"
                  activeclassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink> */}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
