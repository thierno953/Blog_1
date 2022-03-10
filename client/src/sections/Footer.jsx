import React, { useState } from "react";
import BrandName from "../components/BrandName";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import "../styles/sections/Footer.scss";
import axios from "axios";

function Footer() {
  const [to, setTo] = useState("");
  const [msg, setMsg] = useState("");

  const handleNameChange = (e) => {
    setTo(e.target.value);
    setMsg(msg)
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = { to };

    axios
      .post("/users", user)
      .then((res) => {
        setMsg(res.data.respMesg);

        setTimeout(() => {
          setMsg("");
        }, 2000);

        setTo("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="footer-container">
      <div className="container">
        <div className="main-container">
          <div className="news-letter">
            <BrandName isFooter={true} />
            <p>Please Enter Your Email</p>
            <form onSubmit={onSubmit} className="mail">
              <input
                type="email"
                placeholder="Email"
                name="to"
                onChange={handleNameChange}
                value={to}
              />
              <button>
                <AiOutlineSend />
              </button>
            </form>
          </div>
          <div className="quick-links">
            <h3>Forntend</h3>
            <ul>
              <li>
                <a href="#">Html</a>
              </li>
              <li>
                <a href="#">Css</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Redux</a>
              </li>
              <li>
                <a href="#">TypeScript</a>
              </li>
            </ul>
          </div>
          <div className="industries">
            <h3>Backend</h3>
            <ul>
              <li>
                <a href="#">NodeJS</a>
              </li>
              <li>
                <a href="#">MongoDB</a>
              </li>
              <li>
                <a href="#">MySql</a>
              </li>
             
            </ul>
          </div>
          <div className="touch">
            <h3>Get in Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">thiernobarry554@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">+32 466 240 103</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#"> Brussel (Woluwe Saint Pierre)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
