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

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
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
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <AiOutlineHome style={{ color: "#ea4335" }} size={25} />
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineTeam style={{ color: "#4285f4" }} size={25} />
                  <span>Team</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <MdOutlineEvent style={{ color: "#0f9d58" }} size={25} />{" "}
                  <span>Events</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <AiOutlineComment style={{ color: "#fbbc04" }} size={25} />
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <BsQuestionCircle style={{ color: "#ea4335" }} size={25} />
                  <span>FAQ</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineForm style={{ color: "#4285f4" }} size={25} /> Join
                  Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      style={{ color: "#0f9d58" }}
                      className="dropdown-item"
                      href="#"
                    >
                      As a Member
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "#fbbc04" }}
                      className="dropdown-item"
                      href="#"
                    >
                      As a Volunteer
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: "#ea4335" }}
                      className="dropdown-item"
                      href="#"
                    >
                      As a Leader
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* navbar 2 */}

      {/* <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand" href="#">
          <img
            style={{ width: "50px" }}
            src="https://i.ibb.co/Hp0SX43/gdg.png"
            alt="gdg"
            border="0"
          />
          <h1 className="h5 d-inline">GDG Patna</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GoThreeBars />
        </button>
        <div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <div class="hori-selector">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <li class="nav-item active">
                <a class="nav-link" href="javascript:void(0);">
                  <AiOutlineHome /> Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">
                  <AiOutlineTeam />
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">
                  <MdOutlineEvent />
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">
                  <AiOutlineComment />
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">
                  <BsQuestionCircle />
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">
                  <AiOutlineForm />
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
