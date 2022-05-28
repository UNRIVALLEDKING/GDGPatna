import React from "react";
import "./Teams.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";

export default function Teams() {
  return (
    <>
      <Navbar />
      <div
        style={{ borderBottom: "2px solid #6c757d" }}
        className="text-center inner_content"
      >
        <div className="w-100 text-center">
          <h2 className="d-inline-block text-intro px-3 pb-2 rounded">
            Organiser
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-12 col-sm-5 col-lg-3 pr-0">
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
                <a target="_blank" href="https://twitter.com/anuragceg">
                  <AiFillTwitterCircle size={25} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/anuragisverma"
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
                <a target="_blank" href="https://www.linkedin.com/in/anuragver">
                  <AiFillLinkedin size={25} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-7 col-lg-9">
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
                <h3 class="name">Shekhar Sahani</h3>
                <h4 class="title">Technical Lead</h4>
              </div>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/Shekhar44007302">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/shekhar.sahani.393"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/Starlord0987">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/shekharsahani/"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/starlord.s_s/"
                  >
                    <AiFillInstagram size={25} />
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
                  src="https://i.ibb.co/DDzpRHL/unrivalledking.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Priyanshu Sinha</h3>
                <h4 class="title">Research Lead</h4>
              </div>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/priyanshu0312">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/priyanshu.sinha.0312"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/Mrsinha03">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/priyanshusinha03/"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/_mr.sinha03/"
                  >
                    <AiFillInstagram size={25} />
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
                  src="https://i.ibb.co/DDzpRHL/unrivalledking.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Aditya Kumar</h3>
                <h4 class="title">Innovation Lead</h4>
              </div>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/UNRIVALLED_KING">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/unrivalled.king1"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/UNRIVALLEDKING">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/unrivalledking"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/unrivalled___king"
                  >
                    <AiFillInstagram size={25} />
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
                  src="https://i.ibb.co/fvPbpKv/nit2.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Nitesh Kumar</h3>
                <h4 class="title">Design Lead</h4>
              </div>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/nitesh_yadav02">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/niteshkryadav02"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/TheimmortalRoman">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/niteshkumaryadav02"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/_nitesh_yadav_02"
                  >
                    <AiFillInstagram size={25} />
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
                  src="https://i.ibb.co/Vp4G8Py/palak.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Palak Kumari</h3>
                <h4 class="title">Content writer</h4>
              </div>
              <ul class="social">
                <li>
                  <a target="_blank" href="">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/sizzling.palak.75"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/Palak2311">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/palak-kumari-00475a227/"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/palakkkk___________/"
                  >
                    <AiFillInstagram size={25} />
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
                  src="https://i.ibb.co/bKZwYy5/khushi2.jpg"
                  alt=""
                />
              </div>
              <div class="team-content">
                <h3 class="name">Khushi Kumari</h3>
                <h4 class="title">Content writer</h4>
              </div>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/UNRIVALLED_KING">
                    <AiFillTwitterCircle size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/unrivalled.king1"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/UNRIVALLEDKING">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/unrivalledking"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/unrivalled___king"
                  >
                    <AiFillInstagram size={25} />
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
