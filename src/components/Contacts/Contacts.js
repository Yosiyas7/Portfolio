import React, { useState } from "react";
import classNames from "classnames";
import "./Contacts.css";
import { useForm, ValidationError } from '@formspree/react';

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Contact form submission handler
  const submitContactForm = (event) => {
    event.preventDefault();

    // Validate form data
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Submit form data
    fetch("https://formspree.io/f/mknadrlv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(
            "Thank you for your message! I will get back to you as soon as possible."
          );
        } else {
          alert("Thank you for your message! I will get back to you as soon as possible.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Thank you for your message! I will get back to you as soon as possible.");
      });
  };

  return (
    <div className="contacts-container">
      <h1>Contact Form</h1>
      <form id="contact-form" onSubmit={submitContactForm}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
  }  

export default Contacts;


