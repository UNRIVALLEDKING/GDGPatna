import React from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer bg-light">
        <div className="container">
          <div className="row pt-3 pb-2 align-items-center">
            <div className="col-md-8">
              <a className="navbar-brand text-dark" href="*">
                <img
                  style={{ width: "50px", marginRight: "5px" }}
                  src="https://i.ibb.co/Hp0SX43/gdg.png"
                  alt="gdg"
                  border="0"
                />
                <h1 className="h5 d-inline">Google Developers Group Patna</h1>
              </a>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0">Connect with us</h6>
                </div>
                <div>
                  <ul className="sns-link-foot align-items-center mb-0">
                    <li>
                      <a target="_blank" href="https://twitter.com/gdgpatna">
                        <AiFillTwitterCircle size={25} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/gdgpatna"
                      >
                        <BsFacebook size={25} />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://t.me/gdgpatna">
                        <BsTelegram size={25} />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/c/GDGPatna"
                      >
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-0" />
        <h5>hello</h5>
      </div>
    </>
  );
}
