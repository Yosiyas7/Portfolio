import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yosiyas Debessay </span>
            from <span className="purple"> Sydney, Australia.</span>
            <br /> I'm a software engineering enthusiast who recently completed an immersive course at General Assembly, honing my skills and diving into the world of cutting-edge technologies.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm HIM"{" "}
          </p>
          <footer className="blockquote-footer">Yosiyas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
