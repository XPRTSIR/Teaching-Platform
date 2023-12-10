import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboard,
  faChalkboardUser,
  faLaptop,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
// import "./Classroom";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Classroom from "./Classroom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="headernavbar">
      <button>
        <FontAwesomeIcon className="iconsfornav" icon={faChalkboardUser} />
        {/* <Link to={Classroom}>Classroom</Link> */}
        {/* problem  hare 'not working link tag' */}
        Classroom
      </button>
      <button>
        <FontAwesomeIcon className="iconsfornav" icon={faChalkboard} />
        Whiteboard
      </button>
      <button>
        <FontAwesomeIcon className="iconsfornav" icon={faVideo} />
        Videos
      </button>
      <button>
        <FontAwesomeIcon className="iconsfornav" icon={faLaptop} />
        Slide Show
      </button>
      <button>
        <FontAwesomeIcon className="iconsfornav" icon={faFile} />
        Documents
      </button>
      <button>
        <FontAwesomeIcon className="iconsfornav" icon={faFile} rotation={180} />
        Docu.com
      </button>
    </div>
  );
};

export default Navbar;
