import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import exec1 from "../assets/Img/exec1.png";
import exec2 from "../assets/Img/exec2.png";
import exec3 from "../assets/Img/exec3.png";
import exec4 from "../assets/Img/exec4.png";
import exec5 from "../assets/Img/exec5.png";
import exec6 from "../assets/Img/exec6.png";
import exec7 from "../assets/Img/exec7.png";
import exec8 from "../assets/Img/exec8.png";
import exec9 from "../assets/Img/exec9.png";
import exec10 from "../assets/Img/exec10.png";
import exec11 from "../assets/Img/exec11.png";
import exec12 from "../assets/Img/exec12.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Execs = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec9,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec10,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec11,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec12,
    },
  ];

  return (
    <section className="exec" id="execs">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Execs</h2>
                <p>Meet the Team Behind the University of Alberta Chinese Students Society</p>
                <Tab.Container id="execs-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Execs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Upcoming Event</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((exec, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...exec}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Check back soon for a list and signup sheets for future events.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}