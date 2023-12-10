// import logo from "./logo.svg";
import "./App.css";
import "./Components/Classroom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";
// import Classroom from "./Components/Classroom";

function App() {
  return (
    <div className="rightall">
      <header>
        <div className="navdiv lefticon">
          <ul>
            <FontAwesomeIcon icon={faLessThan} style={{ color: "grey" }} />
            <li className="rightwhite">Basice Maithematics 101</li>
          </ul>
        </div>
        <div className="navdiv">
          <ul className="icons">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <li>Call Teacher</li>
            <FontAwesomeIcon className="icon1" icon={faUser} />
            <li>Support</li>
          </ul>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Navbar />
      <br />
      <Video />
    </div>
  );
}

export default App;
