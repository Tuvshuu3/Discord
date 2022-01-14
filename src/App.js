import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";          
import { Container, Navbar, Button, Nav,  } from "react-bootstrap";
import LogoNname from "./assets/LogoNname.svg"
import Background2 from "./assets/Background2.svg"
import Background3 from "./assets/Background3.svg"
import DownloadIcon from '@mui/icons-material/Download';



const App = () => {
  return (
    <div className="Literally_Everything">
      <div className="Literally_Everything-First d-flex flex-column align-items-center w-100 justify-content-between">
        <Navbar className='Literally_Everything-First-Navbar' collapseOnSelect expand="lg" bg="#primary" variant="dark">
          <Container>
            <Navbar.Brand style={{'width': '140px', 'height': '46px'}} href="#home"><img src={LogoNname} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto w-88 justify-content-center gap-3">
                <Nav.Link className='white header-style'>Download</Nav.Link>
                <Nav.Link className='white header-style'>Nitro</Nav.Link>
                <Nav.Link className='white header-style'>Safety</Nav.Link>
                <Nav.Link className='white header-style'>Support</Nav.Link>
                <Nav.Link className='white header-style'>Blog</Nav.Link>
                <Nav.Link className='white header-style'>Careers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Button className='Literally_Everything-First-Navbar-Button' style={{"border-radius": "100px", "width": "64px", "height": "38px", "font-size": "14px", "fontWeight": "500"}} variant="light">Login</Button>
              </Nav>
          </Container>
        </Navbar>

        <div className='Literally_Everything-First-Middle d-flex justify-content-center align-items-center'>
          <div className='Literally_Everything-First-Middle-stuff d-flex flex-column'>
            <div className='Literally_Everything-First-Middle-stuff-Text text-align-center'>
              <div className='Literally_Everything-First-Middle-stuff-Text-Big white'>IMAGINE A PLACE...</div>
              <div className='Literally_Everything-First-Middle-stuff-Text-Small white'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
            </div>
   
            <div className='Literally_Everything-First-Middle-stuff-Buttons'>
            <Button href="//discord.com/api/download?platform=osx" className='Literally_Everything-First-Middle-stuff-Buttons-Download' style={{"border-radius": "100px", "width": "294px", "height": "56px", "font-size": "20px", "fontWeight": "500"}} variant="light"> {DownloadIcon} Download for Mac</Button>
            <Button className='Literally_Everything-First-Navbar-Button' style={{"border-radius": "100px", "width": "315px", "height": "56px", "font-size": "20px", "fontWeight": "500"}} variant="light">Open Discord in your browser</Button>
            </div>

          </div>
        </div>
        
        <div className='img1-2 d-flex flex-row justify-content-between'>
            <img src={Background2} className='Literally_Everything-First-Background2' width={700}/>
            <img src={Background3} className='Literally_Everything-First-Background3' width={610}/>
        </div>
        </div>
    </div>
  );
};

export default App;

