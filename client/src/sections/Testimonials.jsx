import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import "../styles/sections/Testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials-container" id="testimonial">
      <div className="container">
        <div className="title-container">
          <Title title="Testimonials" color="blue" />
          <p>See what our clients are saying about us.</p>
        </div>
        <div className="testimonials">
          <Testimonial
            content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
            name="Trushit Vyas"
            designation="Co-Founder"
          />
          <Testimonial
            content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
            name="Kishan H. Sheth"
            designation="Founder & CEO"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            designation="Founder"
          />
        </div>
      </div>
    </div>
  );
}
