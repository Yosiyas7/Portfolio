import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grodt from "../../Assets/Projects/grodt.png";
import spotify from "../../Assets/Projects/spotify.png";
import teamsheet from "../../Assets/Projects/teamsheet.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grodt}
              isBlog={false}
              title="GRODT"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Socket.io. Have features which allows user for realtime messaging, group messaging and more."
              ghLink="https://github.com/Yosiyas7/Project3"
              demoLink="https://grodtchat.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify-Clone"
              description="This is a Spotify Clone that me and a group of friends created. The application is built using React and utilizes React Router for navigation. It integrates with the Spotify API to allow users to authenticate, view their playlists, search for songs, and play them."
              ghLink="https://github.com/Yosiyas7/SpotifyClone"
              demoLink="https://monumental-youtiao-1bceaf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamsheet}
              isBlog={false}
              title="Football League CRUD System"
              description="This is a user-friendly football team sheet application built using Ruby on Rails that allows users to create and manage their own teams, experiment with different player combinations and formations, access important player statistics, and share their team sheets with others for community engagement and collaboration."
              ghLink="https://github.com/Yosiyas7/Rails"
              demoLink="https://localhost:3000/"              
            />
          </Col>

          {/* For future Projects */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamsheet}
              isBlog={false}
              title="Football League CRUD System"
              description="This is a user-friendly football team sheet application built using Ruby on Rails that allows users to create and manage their own teams, experiment with different player combinations and formations, access important player statistics, and share their team sheets with others for community engagement and collaboration."
              ghLink="https://github.com/Yosiyas7/Rails"
              demoLink="https://localhost:3000/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamsheet}
              isBlog={false}
              title="Football League CRUD System"
              description="This is a user-friendly football team sheet application built using Ruby on Rails that allows users to create and manage their own teams, experiment with different player combinations and formations, access important player statistics, and share their team sheets with others for community engagement and collaboration."
              ghLink="https://github.com/Yosiyas7/Rails"
              demoLink="https://localhost:3000/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
