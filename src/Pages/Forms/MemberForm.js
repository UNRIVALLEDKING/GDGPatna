import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function MemberForm() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{ backgroundColor: "#4285f4" }}
          className="text-white p-4 p-md-5 mb-4 rounded inner_content"
        >
          {" "}
          <h1>Join us</h1>
        </div>
      </div>
    </>
  );
}
