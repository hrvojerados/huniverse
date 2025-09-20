import Navbar from "../components/Navbar";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar/>
    <div className="pageContainer">
      <h1>Contact Me</h1>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            className="inputName"
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Email:
          <input 
            className="inputMail"
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Message:
          <br/>
          <textarea 
            className="inputMessage"
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </label>

        <button className="sendButton" type="submit">Send</button>
      </form>
    </div>
    </>
  );
}
