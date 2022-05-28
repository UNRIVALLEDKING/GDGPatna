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
              <h1 className="display-3 text-center">GDG Patna</h1>
              <h6 className="display-6 fst-italic">
                The Community of Developers, For Developers, By Developers
              </h6>
              <p className="lead my-3">
                Our ultimate goal is to bring together all developers of Patna
                to create a thriving developer ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
