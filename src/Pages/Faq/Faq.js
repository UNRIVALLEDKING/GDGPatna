import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./faq.css";

export default function Faq() {
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div
          style={{
            backgroundColor: "#4285f4",
          }}
          className="text-white p-3 p-lg-5 mb-5 rounded inner_content"
        >
          <h4 className="text-center mb-3 pb-4 border-bottom">
            Questions? Look here
          </h4>

          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample1"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . What is Google Developers Group (GDG) ?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample1">
              <div class="card card-body text-dark w=100">
                Google Developer Groups (GDGs) are for developers who are
                interested in Google's developer technology; everything from the
                Android, Chrome, Drive, and Google Cloud platforms, to product
                APIs like the Cast API, Maps API, and YouTube API.
              </div>
            </div>
          </div>

          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . Who are we?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample">
              <div class="card card-body text-dark w=100">
                We are the Patna chapter of the global Google Developer Group
                (GDG) program. We are supported by Google but not run by them.
                <br />
                Our activities are planned and executed by a small group of
                dedicated volunteers.
              </div>
            </div>
          </div>

          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . Who can register for GDG Patna community events ?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample2">
              <div class="card card-body text-dark w=100">
                Beginners, experts, literally everyone. Anyone with the passion
                of learning, who’s fond of technology, passionate programmers ,
                everybody can register and attend.
              </div>
            </div>
          </div>
          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample3"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . How can I become a member of GDG Patna ?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample3">
              <div class="card card-body text-dark w=100">
                <span>
                  Simply click on Join Us button you can see in Navbar or at
                  home page. and if you aren't from Bihar then find the nearest
                  GDG in your location at{" "}
                  <span>
                    <a href="https://gdg.community.dev/">GDG Community Page</a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample4"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . How can I communicate my queries?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample4">
              <div class="card card-body text-dark w=100">
                <span>
                  Reach out to us on various social media sites. You can find
                  all our Social media handles at the home page and at footer
                  section. Our Volunteers/Admins will respond to all your
                  queries ASAP.
                </span>
              </div>
            </div>
          </div>
          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample5"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . Want to Volunteer and help us to build strong tech community
                in Bihar ?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample5">
              <div class="card card-body text-dark w=100">
                <span>
                  Reach out to us on our Social media handles with #volunteers.
                </span>
              </div>
            </div>
          </div>
          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample6"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . Is it mandatory to register to participate in the community
                event ?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample6">
              <div class="card card-body text-dark w=100">
                <span>
                  Yes. Each individual may register for only one ticket. You may
                  not register on behalf of anyone else.
                </span>
              </div>
            </div>
          </div>
          <div className="faq mb-2 rounded p-3">
            <div
              data-bs-toggle="collapse"
              href="#collapseExample7"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample7"
              className="w-100"
            >
              <a className="text-white" style={{ textDecoration: "none" }}>
                Q . What is Monthly Meetups ?
              </a>
            </div>
            <div class="collapse coll_fix" id="collapseExample7">
              <div class="card card-body text-dark w=100">
                <span>
                  We hold monthly meetups in Patna, on Last Sunday of each
                  month, Get help and Mentor others, It also includes time to
                  talk and networking opportunities, a summary of new software
                  and hardware releases from local experts, and time to announce
                  anything new you have shipped this month. Bring your laptop
                  with something to work on.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
