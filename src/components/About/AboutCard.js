import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a <span className="purple"> Sydney-based CRM Developer</span> with a knack for modern solutions, a passion for innovation and a focus on the latest tech trends. I craft streamlined <span className="purple">CRM solutions </span> that propel businesses forward in today's digital world. Let's <span className="purple">connect </span> and explore how we can elevate your <span className="purple">customer relationships </span> together.
            <br />
            <br />
            <br />
            Cutting edge companies and brands I've had the privilege to develop for
          </p>
          <ul>
            <li className="about-activity">
            <span className="purple"> <ImPointRight /></span> The Star Entertainment Group
            </li>
            <li className="about-activity">
            <span className="purple"> <ImPointRight /></span> Emerald Cardiac
            </li>
            <li className="about-activity">
              <span className="purple"> <ImPointRight /></span> Vocal Media
            </li>
            <li className="about-activity">
              <span className="purple"> <ImPointRight /></span> Ecommerce Brands
            </li>
            <li className="about-activity">
              <span className="purple"> <ImPointRight /></span> Commercial Real Estate
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "And Many More"{" "}
          </p>
          <footer className="blockquote-footer">Yosiyas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
