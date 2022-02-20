import React, { useState } from "react";
import "../styles/sections/Contact.css";
import Image from "../assets/contact1.png";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post(`/contact`, data)
      .then((res) => {
        setBanner(res.data.msg);

        setTimeout(() => {
          setBanner("");
        }, 2000);

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form_contact">
      <div className="form_grid_contact">
        <div className="from_flex_contact">
          <div className="from_info">
            <img src={Image} alt="Images" />
            <h2> Demande d'information</h2>
            <h3>
              Phone : <span>+32 466 240 103</span>
            </h3>
            <h3>
              Email : <span>thiernobarry554@gmail.com</span>
            </h3>
            <h3>
              Adresse : <span>Rue Sombre 79 (Woluwe Saint Pierre)</span>
            </h3>
            <p>texte lisible et contenant du sens est source de distractions</p>
          </div>
          <form onSubmit={formSubmit}>
            <p>{banner}</p>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email" 
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              type="text"
              name="message"
              rows="6"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button type="submit" className="btn_contact">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
