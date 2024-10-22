import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contact from '../assets/Img/contactus.png';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceID = 'service_xlw2out';
    const templateID = 'template_u9bzesb';
    const publicKey = 'o71XqtrEv8iv7c508';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
          console.log('email sent successfully', response); 
          setName('',
          setEmail(''),
          setMessage(''));

        })
      .catch((error) => {
        console.error('error sending email', error);
      });


  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1"> 
                      <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
          </TrackVisibility>
        </Col>
        </Row>
      </Container>
    </section>
  )
}