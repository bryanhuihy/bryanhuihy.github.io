import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import twitter from "../assets/img/twitter-logo.jpg";
import ninjavan from "../assets/img/ninjavanlogo.png";
import lms from "../assets/img/learning-management-system.jpg";
import resume from "../assets/img/resume.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real-time Analysis of Fashion Trends via Tweets",
      description: "Hadoop, Spark, Kafka, MongoDB, Tableau",
      imgUrl: twitter,
    },
    {
      title: "Internal Forum and Documentation Web-App for Ninjavan",
      description: "React, Typescript, Go",
      imgUrl: ninjavan,
    },
    {
      title: "Learning Management System Web Application",
      description: "Javascript, CSS, HTML, PHP, MySQL",
      imgUrl: lms,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects || Internships || Resume</h2>
                <p>Here's a list of the projects I've done and internships I've taken!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="Projects">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="Projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Internships">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Resume">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="Projects">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Internships">
                      <h2>Advancer Smart Technology</h2>
                      <h3 style={{ textAlign:'center' }}>IT Intern</h3><br />
                      <h5 style={{ textAlign:'center' }}>•	Produced working diagrams for IoT devices around SMART toilet project.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Completed tender documents for project bid at BCA.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Produced BCA Bluetooth Beacon drawings for security IoT and cross functional flowcharts.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Produced several user guides for IoT devices.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Designed and implemented end-to-end IoT solutions for the “SMART Toilet” project.</h5>
                      <br/><br/><br/><br/><br/>
                      
                      <h2>Resort World Sentosa</h2>
                      <h3 style={{ textAlign:'center' }}>IT Security Intern</h3><br />
                      <h5 style={{ textAlign:'center' }}>•	Handled Security Risk Management by monitoring and documenting vulnerabilities using Symantec Web Security Services and Managed Security Services.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Improved overall IT security by writing a server hardening script on Tenable, projected to enhance security measures by 30%.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Created whitelist and blacklist system using WSS Symantec, paired with compilation of Threat Protection Policies to tighten web usage.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Generated forensic reports on high-risk users.</h5>
                      <h5 style={{ textAlign:'center' }}>•	Pioneered E-training course and slides for all staff at Resort World Sentosa, increasing general knowledge of users and educating risk of internet misuse.</h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Resume">
                      <div style={{ marginLeft:'22%' }}>
                        <img src={resume} alt="resume" style={{ width:'70%' }}/>
                      </div>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroundImg"></img>
    </section>
  )
}
