import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{
            backgroundColor: "rgba(234, 67, 53, 1)",
          }}
          className="text-white p-4 p-lg-5 mb-4 rounded inner_content"
        >
          <div className="row">
            <div className="col px-0">
              <h1 className="display-3 text-center">
                Google Developers Group Patna
              </h1>
              <h6
                style={{ fontSize: "35px", fontWeight: "300" }}
                className="fst-italic text-center border-bottom py-2"
              >
                The Community of Developers, For Developers, By Developers
              </h6>
              <p className="lead my-3">
                When you join a Google Developer Group, you’ll have the
                opportunity to meet local developers with similar interests in
                technology. A GDG meetup event includes talks on a wide range of
                technical topics where you can learn new skills through hands-on
                workshops. The community prides itself on being an inclusive
                environment where everyone and anyone interested in tech - from
                beginner developers to experienced professionals - all are
                welcome to join.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
