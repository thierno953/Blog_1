import React from "react";
import Title from "../components/Title";
import "../styles/sections/Why.scss";
import spaceVideo from "../assets/space.mp4";

function Why() {
  return (
    <div className="why-container" id="services">
      <div className="container">
        <div className="top">
          <Title title="Character" color="pink" />
          <div className="subTitle">
            <p>
              Always stay up to date with technologies thus helping customers by
              giving them the best solutions for their needs.
            </p>
          </div>
        </div>
        <div className="content">
          <div>
            <video autoPlay loop muted id="video" className="video">
              <source src={spaceVideo} type="video/mp4" />
            </video>
          </div>
          <div className="reasons">
            <ul>
              <li>I am a very rigorous and independent person.</li>
              <li>
                I have a great ability to listen (especially to understand
                customer needs)
              </li>
              <li>
                I adapt quickly to changes in my environment and be responsive
              </li>
              <li>I work without counting overtime </li>
              <li> like working in a team and independently too.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
