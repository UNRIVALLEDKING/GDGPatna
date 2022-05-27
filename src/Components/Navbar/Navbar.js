import React from "react";
import "./Navbar.css";
import {
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineComment,
  AiOutlineForm,
} from "react-icons/ai";
import { MdOutlineEvent } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Teams from "../../Pages/Teams/Teams";
import Home from "../../Pages/Home/Home";

export default function Navbar() {
  const location = window.location.pathname;

  return (
    <>
      <nav
        style={{ backgroundColor: "#fafafa", maxWidth: "100%" }}
        className="navbar fixed-top navbar-expand-lg navbar-light"
      >
        <div className="container">
          <a className="navbar-brand" href="*">
            <img
              style={{ width: "50px", marginRight: "5px" }}
              src="https://i.ibb.co/Hp0SX43/gdg.png"
              alt="gdg"
              border="0"
            />
            <h1 className="h5 d-inline">GDG Patna</h1>
          </a>
          <span
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location === `/` || location === `/*` ? "active" : " "
                    }`}
                    aria-current="page"
                  >
                    <AiOutlineHome style={{ color: "#ea4335" }} size={25} />
                    <span>Home</span>
                  </a>
                </li>
              </Link>
              <Link to="/team">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location === `/team` ? "activeteam" : " "
                    }`}
                  >
                    <AiOutlineTeam style={{ color: "#4285f4" }} size={25} />
                    <span>Team</span>
                  </a>
                </li>
              </Link>
              <Link to="/events">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location === `/events` ? "activeevent" : " "
                    }`}
                  >
                    <MdOutlineEvent style={{ color: "#0f9d58" }} size={25} />{" "}
                    <span>Events</span>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location === `/about` ? "activeabout" : " "
                  }`}
                >
                  <AiOutlineComment style={{ color: "#fbbc04" }} size={25} />
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location === `/faq` ? "activefaq" : " "
                  }`}
                >
                  <BsQuestionCircle style={{ color: "#ea4335" }} size={25} />
                  <span>FAQ</span>
                </a>
              </li>
              <Link to="/join">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      location === `/join` ? "activeteam" : " "
                    }`}
                  >
                    <AiOutlineForm style={{ color: "#4285f4" }} size={25} />{" "}
                    Join Us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
