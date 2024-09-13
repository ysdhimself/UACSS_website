import pic1 from '../assets/Img/agm 1.jpeg';
import pic2 from '../assets/Img/agm 2.jpeg';
import pic3 from '../assets/Img/board_game_night 1.jpg';
import pic4 from '../assets/Img/chinatown 1.jpg';
import pic5 from '../assets/Img/chinatown 2.jpg';
import pic6 from '../assets/Img/club dance fair 1.jpg';
import pic7 from '../assets/Img/dumpling 1.jpg';
import pic8 from '../assets/Img/infomart 1.JPG';
import pic9 from '../assets/Img/mid autumn 1.jpeg';
import pic10 from '../assets/Img/mid autumn 2.jpg';
import pic11 from '../assets/Img/mid autumn 3.jpg';
import pic12 from '../assets/Img/potluck 1.JPG';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Events = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="event" id="events">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="event-bx wow zoomIn">
                        <h2>Events</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pic1} alt="agm1" />
                                <h5>First Annual General Meeting</h5>
                            </div>
                            <div className="item">
                                <img src={pic2} alt="agm2" />
                                <h5>First Annual General Meeting</h5>
                            </div>
                            <div className="item">
                                <img src={pic3} alt="bgn" />
                                <h5>Board Game Night</h5>
                            </div>
                            <div className="item">
                                <img src={pic4} alt="ct1" />
                                <h5>Chinatown Dance Team</h5>
                            </div>
                            <div className="item">
                                <img src={pic5} alt="ct2" />
                                <h5>Chinatown Dance Team</h5>
                            </div>
                            <div className="item">
                                <img src={pic6} alt="cdf" />
                                <h5>Club Dance Fair</h5>
                            </div>
                            <div className="item">
                                <img src={pic7} alt="Dumpling event" />
                                <h5>Dumpling Making Event</h5>
                            </div>
                            <div className="item">
                                <img src={pic8} alt="Infomart" />
                                <h5>InfoMart</h5>
                            </div>
                            <div className="item">
                                <img src={pic9} alt="maf" />
                                <h5>Mid Autumn Festival</h5>
                            </div>
                            <div className="item">
                                <img src={pic10} alt="maf" />
                                <h5>Mid Autumn Festival</h5>
                            </div>
                            <div className="item">
                                <img src={pic11} alt="maf" />
                                <h5>Mid Autumn Festival</h5>
                            </div>
                            <div className="item">
                                <img src={pic12} alt="PotLuck" />
                                <h5>PotLuck</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}