import { Button } from "@mui/material";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram, BsFacebook, BsDiscord } from "react-icons/bs";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div
          style={{
            backgroundColor: "rgba(234, 67, 53, 0.85)",
            marginTop: "10vh",
          }}
          className="text-white p-4 p-md-5 mb-4 rounded"
        >
          <div className="row">
            <div className="col-md-6 px-0">
              <h1 className="display-6 fst-italic">
                The Community of Developers, For Developers, By Developers
              </h1>
              <p className="lead my-3">
                Our ultimate goal is to bring together all developers of Patna
                to create a thriving developer ecosystem.
              </p>

              <ul className="sns-link-home">
                <li>
                  <a target="_blank" href="https://twitter.com/gdgpatna">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/gdgpatna">
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/gdgpatna">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/c/GDGPatna">
                    <AiFillYoutube size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/gdg-patna"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="*">
                    <BsDiscord size={25} />
                  </a>
                </li>
              </ul>
              <Button
                style={{
                  color: "white",
                  border: "1px solid white",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                Learn More
              </Button>
              <Button
                className="d-inline-block d-md-none"
                style={{ color: "white", border: "1px solid white" }}
                variant="outlined"
              >
                Join Us
              </Button>
            </div>
            <div className="col-md-6 px-2">
              <iframe
                className="rounded mt-3 mt-md-0"
                width="100%"
                height="270"
                src="https://www.youtube.com/embed/V6s5kjSoqzw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="p-3 p-md-3">
          <div
            style={{ backgroundColor: "rgba(219, 219, 219, 0.85)" }}
            className="row rounded p-3 p-md-4 what_do"
          >
            <div className="col-12 col-md-5 pt-2 pt-0">
              <h6>What do we do?</h6>
              <p>
                Google Developer Groups (GDGs) are for developers who are
                interested in Google's developer technology.
              </p>
              <p>About different Google technologies</p>
              <div>
                <button>Web</button>
                <button>Android</button>
                <button>Firebase</button>
                <button>Flutter</button>
                <button>Google Cloud Platform</button>
              </div>
            </div>
            <div className="col-12 col-md-2 mt-4 mt-md-0">
              <h5>Connect</h5>
              <p>
                Meet local developers and technologists. All are welcome,
                including those with diverse backgrounds and from various
                companies and industries.
              </p>
            </div>
            <div className="col-12 col-md-2 mt-4 mt-md-0">
              <h5>Learn</h5>
              <p>
                Learn about a range of technical topics and gain new skills
                through hands-on workshops, training, events, talks, and meet
                ups - both online and in-person.
              </p>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0">
              <h5>Grow</h5>
              <p>
                Apply your knowledge and connections to build great products &
                advance your skills, career, and network. Give back to your
                community by helping others learn, too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
