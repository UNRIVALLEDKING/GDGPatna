import React from "react";
import "./Teams.css";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram, BsFacebook } from "react-icons/bs";

export default function Teams() {
  return (
    <>
      <div
        style={{ borderBottom: "2px solid #6c757d", marginTop: "10vh" }}
        className="text-center"
      >
        <div className="w-100 text-center">
          <h2 className="d-inline-block text-intro px-3 pb-2 rounded">
            Organiser
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-12 col-md-3 pr-0">
            <img
              width="100%"
              className="rounded-circle img-fluid mt-2"
              src="https://i.ibb.co/5xzztmv/image.png"
              alt=""
            />
            <div className="highlight">
              <h4 className="text-muted">Anurag Verma</h4>
              <p className="text-small text-muted">
                Community Lead & Organiser
              </p>
            </div>

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
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/gdg-patna"
                >
                  <AiFillLinkedin size={25} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-9">
            <p className="text-intro p-3 rounded">
              GDG Patna is a monthly tech meetup in Patna, that aims to bring
              the developer community together to learn, teach, share, and most
              importantly, form lasting connections.
            </p>
          </div>
        </div>
      </div>
      <h2
        style={{ borderTop: "2px solid #6c757d" }}
        className="text-center pb-2 text-white"
      >
        {" "}
      </h2>
      <div className="container">
        <div className="w-100 text-center">
          <h2 className="d-inline-block text-intro px-3 py-2 rounded">
            Our Team
          </h2>
        </div>
        <div className="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team rounded">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://pbs.twimg.com/profile_images/1449749700727357453/1CEOoTpK_400x400.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Sekhar Sahani</h3>
                <h4 class="title">Tech Lead & React Developer</h4>
              </div>
              <ul class="social">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team rounded">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://pbs.twimg.com/profile_images/1449749700727357453/1CEOoTpK_400x400.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Sekhar Sahani</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team rounded">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://pbs.twimg.com/profile_images/1449749700727357453/1CEOoTpK_400x400.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Sekhar Sahani</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team rounded">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://pbs.twimg.com/profile_images/1449749700727357453/1CEOoTpK_400x400.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Sekhar Sahani</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
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
    </>
  );
}
