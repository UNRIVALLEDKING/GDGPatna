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
      <div className="footer">
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
              <div className="d-flex justify-content-between align-items-center mt-3 mt-md-0">
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
        <div className="container footer_links">
          <div style={{ maxWidth: "100%" }} className="row">
            <h5>About</h5>
            <div className="col-md-4">
              <ul>
                <li>
                  <a href="/">GDG Patna</a>
                </li>
                <li>
                  <a target="_blank" href="https://gdg.community.dev/">
                    Google Developers Group
                  </a>
                </li>
                <li>
                  <a href="/">Women Techmakers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <a href="/">Code of Conducts</a>
                </li>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/">Community Guidelines</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <a target="_blank" href="https://play.google.com/console">
                    Google Play Console
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://console.cloud.google.com">
                    GCP Console
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://console.firebase.google.com">
                    Firebase Console
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
