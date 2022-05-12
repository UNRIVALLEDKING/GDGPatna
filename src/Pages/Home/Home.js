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
          style={{ backgroundColor: "#1a73e8", marginTop: "9vh" }}
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
                  <a target="_blank" href="">
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

        <div className="row">
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
