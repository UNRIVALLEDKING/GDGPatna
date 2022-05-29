import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div
          style={{
            backgroundColor: "#4285f4",
          }}
          className="text-white p-3 p-lg-5 mb-4 rounded inner_content"
        >
          <div className="row align-items-center">
            <div className="col-lg-8 px-0 order-2 order-lg-1">
              <h1 className="display-6 text-center border-bottom pb-3 mt-4 mt-lg-0">
                Google Developers Group Patna
              </h1>
              <h6
                style={{ fontSize: "30px", fontWeight: "300" }}
                className="fst-italic text-center"
              >
                The Community of Developers, For Developers, By Developers
              </h6>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <img
                className="img-fluid"
                src="https://i.ibb.co/wzrGwp7/ezgif-com-gif-maker.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <p className="lead my-3">
              When you join a Google Developer Group, you’ll have the
              opportunity to meet local developers with similar interests in
              technology. A GDG meetup event includes talks on a wide range of
              technical topics where you can learn new skills through hands-on
              workshops. The community prides itself on being an inclusive
              environment where everyone and anyone interested in tech - from
              beginner developers to experienced professionals - all are welcome
              to join.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
          }}
          className="p-4 p-lg-5 mb-4 rounded"
        >
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img
                className="img-fluid"
                src="https://i.ibb.co/j3dXgXk/gdg-hero-min.png"
                alt=""
              />
            </div>
            <div className="col-lg-8">
              <p style={{ fontWeight: "350" }} className="lead my-3">
                <strong>
                  <em>Google Developer Group Patna</em>
                </strong>{" "}
                is inspired by GDG Family . We started our journey in{" "}
                <strong>Feb 2019</strong>. We try to engage student developers,
                fresh graduates and professionals through our hack events &
                meetups. The motive is to create a local ecosystem of
                programmers & developers in and around patna. The technology
                awareness is main goal for first few years of the group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
