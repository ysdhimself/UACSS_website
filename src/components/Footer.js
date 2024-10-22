import { Container, Row, Col } from "react-bootstrap";
import  { MailchimpForm }  from "./MailchimpForm.js";
import logo from "../assets/Img/logo.jpg";
import navIcon3 from "../assets/Img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/ualbertacss/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
        <Row className="text-center text-sm-end">
          <Col size={12}>
            <a href='https://pngtree.com/freepng/fortune-cat-maneki-neko-chinese-new-year_15246655.html'>lucky cat from pngtree.com</a>
            <br />
            <a href="https://www.freepik.com/free-vector/flat-design-dragon-silhouette_28720829.htm#query=chinese%20dragon&position=0&from_view=keyword&track=ais_hybrid&uuid=755084a6-3694-4730-9d91-e8eeeee71dda">Dragon Image by Freepik</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}