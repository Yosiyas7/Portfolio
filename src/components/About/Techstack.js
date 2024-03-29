import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiRuby,
  DiNodejs,
  DiReact,
  DiMongodb
} from "react-icons/di";
import {
  SiSolidity,
  SiAngular,
} from "react-icons/si";
import {
  RiVuejsFill,
} from "react-icons/ri";


function Techstack() {
  return ( 
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>       
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
    </Row>
  );
}

export default Techstack;
