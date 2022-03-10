import React, { useState } from "react";
import "../styles/sections/Contact.css";
import Image from "../assets/contact1.png";
import axios from "axios";

const Contact = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");

  const handleNameChange = (e) => {
    setTo(e.target.value);
  };
  const handleEmailChange = (e) => {
    setSubject(e.target.value);
  };
  const handleMessageChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = { to, subject, description };

    axios
      .post("/users", user)
      .then((res) => {
        setMsg(res.data.respMesg);

        setTimeout(() => {
          setMsg("");
        }, 3000);

        setTo("");
        setSubject("");
        setDescription("");
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
            <h3>Information request</h3>
            <h3>
              Phone : <span>+32 466 240 103</span>
            </h3>
            <h3>
              Mail : <span>thiernobarry554@gmail.com</span>
            </h3>
            <h3>
              Address  : <span>Brussel (Woluwe Saint Pierre)</span>
            </h3>
          </div>
          <form onSubmit={onSubmit}>
            <h1>Contact</h1>
            <p>{msg}</p>
            <input
              type="text"
              placeholder="Name"
              required
              name="subject"
              onChange={handleEmailChange}
              value={subject}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="to"
              onChange={handleNameChange}
              value={to}
            />
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Message"
              rows="6"
              name="description"
              onChange={handleMessageChange}
              value={description}
            />
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
