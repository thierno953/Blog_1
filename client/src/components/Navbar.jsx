import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "../styles/components/Navbar.scss";
import "../styles/sections/Starter.scss";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      delay: 30,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <div className="main-container">
      <div className={`navbar ${toggleNavbar === true ? "active" : ""}`}>
        <div className="col">
          <BrandName />
          <div className="collapseble-button">
            {!toggleNavbar ? (
              <GiHamburgerMenu onClick={navbarToggler} />
            ) : (
              <MdClose onClick={navbarToggler} />
            )}
          </div>
        </div>
        <nav>
          <div className="links">
            <ul>
              <li onClick={() => scrollToElement("Starter")}>
                <Link to="/" onClick={navbarToggler}>
                  Home
                </Link>
              </li>
              <li onClick={() => scrollToElement("About")}>
                <Link to="/" onClick={navbarToggler}>
                  About
                </Link>
              </li>
              <li onClick={() => scrollToElement("Why")}>
                <Link to="/" onClick={navbarToggler}>
                  Character 
                </Link>
              </li>
              <li onClick={() => scrollToElement("Blogs")}>
                <Link to="/" onClick={navbarToggler}>
                  Blogs
                </Link>
              </li>
              <li onClick={() => scrollToElement("Testimonials")}>
                <Link to="/" onClick={navbarToggler}>
                Journey
                </Link>
              </li>
              <li>
              <Link to="/contact" onClick={navbarToggler}>
              <Button content="Contact" />
                </Link>
              
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
