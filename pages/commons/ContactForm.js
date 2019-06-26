/* eslint-disable */

import React from "react";
import mascot from "../../../static/img/img.png";
import Head from '../../components/head';

const ContactForm = () => (
  <div>
    <Head
      title="Contact Werick"
      description="Get in touch with Werick Codes"
      image={mascot}
    />
    <form
      action="https://formspree.io/ewachira254@gmail.com"
      className="form-contact"
      method="POST"
    >
      <h1>Contact Form</h1>
      <input
        type="text"
        placeholder="Enter your full name"
        name="name"
        autoFocus
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter your valid email"
        name="_replyto"
      />
      <br />
      <br />
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Enter your message"
      />
      <br />
      <br />
      <button type="submit">Talk to me😁</button>
    </form>
  </div>
);

export default ContactForm;
