import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import { GoCode } from "react-icons/go";
import { BiHeadphone } from "react-icons/bi";
import { BiVolumeFull } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";

import "../styles/sections/About.scss";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="container">
        <div className="details">
          <Title title="PERSONAL STYLE" color="blue" />
          <p>
            Producing quality work is a priority for me. Thorough, precise and
            structured, strives to avoid errors in my work. My diligent attitude
            is the result of the importance I place on the point of view of
            others. I listen to ideas, suggestions and comments. It is therefore
            easy to work with me, to give space to others, to lend my support
            when needed and to complete tasks with thoroughness. In my
            relationships with others, I am humble and I do not impose my
            authority.
          </p>
          <p>
          I go straight to the point, avoid exaggerating. I adapt
            my speech to my audience, and is warm. In my style of work I
            structure my work, I plan and follow the procedures. I tackle one
            task at a time to avoid losing my concentration at work. I am
            meticulous, check my work and make few mistakes. In my emotional
            management I ensure that my decisions are reliable by evaluating the
            results. I am responsive, very energetic and have a sense of
            urgency. I radiate enthusiasm and see the bright side of things.
          </p>
          
        </div>
        <div className="cards">
          <Card title="Web Developer" logo={<GoCode />} />
          <Card title="Music" logo={<BiHeadphone />} />
          <Card title="Social" logo={<BiVolumeFull />} />
          <Card title="Calendar" logo={<BiCalendar />} />
        </div>
      </div>
    </div>
  );
}

export default About;
