import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";          
import { Container, Navbar, Button, Nav, Carousel, Dropdown  } from "react-bootstrap";
import LogoNname from "../assets/LogoNname.svg"
import Background2 from "../assets/Background2.svg"
import Background3 from "../assets/Background3.svg"
import Carousel1 from '../assets/Carousel1.png'
import Carousel2 from '../assets/Carousel2.png'
import Carousel3 from '../assets/Carousel3.png'
import 'material-icons/iconfont/material-icons.css';
import SocialMedia from '../assets/Socialmedia.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Literally_Everything">
      <div className="Literally_Everything-First d-flex flex-column align-items-center w-100 justify-content-between">
        <Navbar className='Literally_Everything-First-Navbar' collapseOnSelect expand="lg" bg="#primary" variant="dark">
          <Container>
            <Navbar.Brand style={{'width': '140px', 'height': '46px'}} href="#home"><img src={LogoNname} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto w-88 justify-content-center gap-4">
                <Nav.Link className='white header-style'>Download</Nav.Link>
                <Nav.Link className='white header-style'>Nitro</Nav.Link>
                <Nav.Link className='white header-style'>Safety</Nav.Link>
                <Nav.Link className='white header-style'>Support</Nav.Link>
                <Nav.Link className='white header-style'>Blog</Nav.Link>
                <Nav.Link className='white header-style'>Careers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Link to='/login'>
                <Button className='Literally_Everything-First-Navbar-Button' variant="light">Login</Button>
              </Link>
              </Nav>
          </Container>
        </Navbar>

        <div className='Literally_Everything-First-Middle d-flex justify-content-center align-items-center'>
          <div className='Literally_Everything-First-Middle-stuff d-flex flex-column'>
            <div className='Literally_Everything-First-Middle-stuff-Text'>
              <div className='Literally_Everything-First-Middle-stuff-Text-Big text-center white'>IMAGINE A PLACE...</div>
              <div className='Literally_Everything-First-Middle-stuff-Text-Small white'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
            </div>
   
            <div className='Literally_Everything-First-Middle-stuff-Buttons d-flex flex-row justify-content-center'>
            <Button href="//discord.com/api/download?platform=osx"  className='Literally_Everything-First-Middle-stuff-Buttons-Download d-flex flex-row justify-content-evenly align-items-center' variant="light">
              <span class="material-icons">download</span>
              Download for Mac
            </Button>
            <Button className='Literally_Everything-First-Middle-stuff-Buttons-Open black' variant="dark">Open Discord in your browser</Button>
            </div>
          </div>
        </div>
        
        {/* <div className='img1-2 d-flex flex-row justify-content-between'>
            <img src={Background2} className='Literally_Everything-First-Background2' width={700}/>
            <img src={Background3} className='Literally_Everything-First-Background3' width={610}/>
        </div> */}
      </div>

      <div className="carousel-stuff">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Carousel1} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Carousel2} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Carousel3} alt="Third slide"/>  
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="FooterContainer">
        <div className="Footer">
          <div className="Footer-TopPart">
            <div className="Footer-TopPart-SocialMedia">
              <div className="Footer-TopPart-SocialMedia-Imagine">IMAGINE A PLACE</div>
              <>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  English, USA
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                  English, USA
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Ydaj 90 </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">ugchih</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">please</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </>
              <div className="Footer-TopPart-SocialMedia-image">
                <img src={SocialMedia}></img>
              </div>
            </div>
            <div className="Footer-TopPart-ALot">
              <div className="Footer-TopPart-ALot-component">
                <div className="Footer-TopPart-ALot-component-title">Product</div>
                <div className="Footer-TopPart-ALot-component-content">Download</div>
                <div className="Footer-TopPart-ALot-component-content">Nitro</div>
                <div className="Footer-TopPart-ALot-component-content">Status</div>
              </div>

              <div className="Footer-TopPart-ALot-component">
                <div className="Footer-TopPart-ALot-component-title">Company</div>
                <div className="Footer-TopPart-ALot-component-content">About</div>
                <div className="Footer-TopPart-ALot-component-content">Jobs</div>
                <div className="Footer-TopPart-ALot-component-content">Branding</div>
                <div className="Footer-TopPart-ALot-component-content">Newsroom</div>
              </div>

              <div className="Footer-TopPart-ALot-component">
                <div className="Footer-TopPart-ALot-component-title">Resources</div>
                <div className="Footer-TopPart-ALot-component-content">College</div>
                <div className="Footer-TopPart-ALot-component-content">Support</div>
                <div className="Footer-TopPart-ALot-component-content">Safety</div>
                <div className="Footer-TopPart-ALot-component-content">Blog</div>
                <div className="Footer-TopPart-ALot-component-content">Feedback</div>
                <div className="Footer-TopPart-ALot-component-content">Developers</div>
                <div className="Footer-TopPart-ALot-component-content">StreamKit</div>
              </div>

              <div className="Footer-TopPart-ALot-component">
                <div className="Footer-TopPart-ALot-component-title">Policies</div>
                <div className="Footer-TopPart-ALot-component-content">Terms</div>
                <div className="Footer-TopPart-ALot-component-content">Privacy</div>
                <div className="Footer-TopPart-ALot-component-content">Cookie Settings</div>
                <div className="Footer-TopPart-ALot-component-content">Guidelines</div>
                <div className="Footer-TopPart-ALot-component-content">Acknowledgements</div>
                <div className="Footer-TopPart-ALot-component-content">Licenses</div>
                <div className="Footer-TopPart-ALot-component-content">Moderation</div>
              </div>
            </div>
          </div>
    
          <div className="Footer-BottomPart">
            <img src={LogoNname}></img>
            <Button className='Footer-BottomPart-Button' variant="dark">Open Discord</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;