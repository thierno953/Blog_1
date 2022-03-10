import React from "react";
import "../styles/sections/Starter.scss";
import WorkImage from "../assets/work.svg";
import Button from "../components/Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Starter() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <h1>
            WELCOME IN MY BLOG 
          </h1>
          <p>
            This blog was created to share my experiences in the world of
            technology and my experience as a junior web developer. Learn best
            practices and develop my skills. Basically, you will find
            information about my extensive skills needed as a web developer. I
            try, as far as possible, to bring something concrete from my daily
            life.
          </p>
          <div className="button-container">
            <Link to="/contact">
            <Button
              content="Contact"
              icon={<HiOutlineArrowNarrowRight />}
            />
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={WorkImage} alt="WorkImage" />
        </div>
      </div>
    </div>
  );
}

export default Starter;
