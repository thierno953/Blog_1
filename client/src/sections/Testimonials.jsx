import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import "../styles/sections/Testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials-container" id="testimonial">
      <div className="container">
        <div className="title-container">
          <Title title="Journey" color="blue" />
          <p>I am looking for a new challenge.</p>
        </div>
        <div className="testimonials">
          <Testimonial
            content="Junior Web Developer at Becode Intensive 7-month training focused on active pedagogy and independent work, followed by a 3-month internship at Diversibe Learning different web languages "
            name="Becode"
            designation="2021"
          />
          <Testimonial
            content="Pre-training as a junior web developer at the local Schaerbeek mission for a period of 2 months"
            name="Mission Locale Schaerbeek"
            designation="2020"
          />
          <Testimonial
            content="I am now looking for new professional challenges. I like to evolve in a team and independently. Propose new ideas and solutions. I am available immediately to start work. "
            name="Job seeking "
            designation="2022"
          />
        </div>
      </div>
    </div>
  );
}
