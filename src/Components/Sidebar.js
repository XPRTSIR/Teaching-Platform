import {
  faBars,
  faChartSimple,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faClock,
  faCalendar,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import profile from "../img/img27.png";

const Sidebar = () => {
  return (
    <div className="wimg">
      <img src="https://img.icons8.com/color/452/whitehat-jr.png" alt="" />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faBars} />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faBell} />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faClock} />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faCalendar} />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faEye} />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faUserGroup} />
      <br />
      <FontAwesomeIcon className="sideicon" icon={faChartSimple} />
      <br />
      <br />
      <img src={profile} alt="nt" style={{ width: "49px" }} />
    </div>
  );
};

export default Sidebar;
