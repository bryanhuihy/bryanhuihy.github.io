import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedInIcon from "../assets/img/nav-icon1.svg";
import facebookIcon from "../assets/img/nav-icon2.svg";
import instagramIcon from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ marginTop: '15px' }}>
              <a href="https://www.linkedin.com/in/bryanhuihy/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="Icon" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Icon" /></a>
              <a href="https://www.instagram.com/bryanhui__/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
