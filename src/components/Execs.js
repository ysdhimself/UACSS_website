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
import sponsor1 from "../assets/Img/sponsor1.jpg";
import sponsor2 from "../assets/Img/sponsor3.png";
import sponsor3 from "../assets/Img/sponsor2.png";
import sponsor4 from "../assets/Img/sponsor4.png";
import sponsor5 from "../assets/Img/sponsor5.png";
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

  // Sponsors array
  const sponsors = [
    {
      name: "Tora Boba",
      discount: "10% discount on all items",
      instagram: "@toraboba.yeg",
      instagramLink: "https://www.instagram.com/toraboba.yeg/",
      imgUrl: sponsor1, // Replace with the actual image later
    },
    {
      name: "Little Bonbon Ice Cream",
      discount: "Buy one get one free on single scoop cups",
      instagram: "@littlebonbon_icecream",
      instagramLink: "https://www.instagram.com/littlebonbon_icecream/",
      imgUrl: sponsor2, // Replace with the actual image later
    },
    {
      name: "Nuttea Nut Mylk Tea",
      discount: "15% discount on all items",
      instagram: "@nuttea_canada",
      instagramLink: "https://www.instagram.com/nuttea_canada/",
      imgUrl: sponsor3, // Replace with the actual image later
    },
    {
      name: "White Rabbit Ice Cream",
      discount: "10% discount on all items",
      instagram: "@whiterabbit_icecream",
      instagramLink: "https://www.instagram.com/whiterabbit_icecream/",
      imgUrl: sponsor4, // Replace with the actual image later
    },
    {
      name: "Yelo'd Ice Cream",
      discount: "Buy one get one free on single scoop cups",
      instagram: "@yelod_icecream",
      instagramLink: "https://www.instagram.com/yelod_icecream/",
      imgUrl: sponsor5, // Replace with the actual image later
    },
  ];
   // Events array
   const events = [
    {
      title: "Badminton Tournament (Collaboration w/ UA Badminton Club)",
      date: "November 2nd, 2024",
      description: "Join us for a fun-filled badminton tournament in collaboration with the UA Badminton Club!"
    },
    // Add more events as needed
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
                    <Nav.Item> {/* New Tab for Sponsors */}
                      <Nav.Link eventKey="third">Sponsors</Nav.Link>
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
                    <Row>
                        <Col>
                          <h5>Upcoming Events</h5>
                          <ul>
                            {events.map((event, index) => (
                              <li key={index}>
                                <strong>{event.title}</strong><br />
                                <em>{event.date}</em><br />
                                <p>{event.description}</p>
                              </li>
                            ))}
                          </ul>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"> {/* New Sponsors Tab */}
                      <Row>
                      {
                          sponsors.map((sponsor, index) => (
                            <Col key={index} sm={6} md={4}>
                              <div className="sponsor-card">
                                <img src={sponsor.imgUrl} alt={sponsor.name} className="sponsor-image" />
                                <h5>{sponsor.name}</h5>
                                <p>{sponsor.discount}</p>
                                {/* Instagram handle as a clickable link */}
                                <p>
                                  <a href={sponsor.instagramLink} target="_blank" rel="noopener noreferrer">
                                    <em>{sponsor.instagram}</em>
                                  </a>
                                </p>
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
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