import React from "react";
import { MdOutlineEvent } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { Button } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";

export default function Event() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{ backgroundColor: "#4285f4" }}
          className="text-white p-4 p-md-5 mb-4 rounded inner_content"
        >
          <div className="row align-items-center">
            <div className="col-md-8 px-0">
              <h1 className="display-6 fst-italic">Events</h1>
              <p>
                Our events are open to newbies, developers, managers, and
                organizations who are interested in Google's technologies or use
                them as part of their projects.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid rounded"
                src="https://i.ibb.co/f8WcNV3/2037368533dev.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="upcoming_events">
          <div className="text-center">
            <h2
              style={{ display: "inline-block" }}
              className="display-6 fst-italic text-intro px-3 pb-3 pt-2 rounded"
            >
              Upcoming Events
            </h2>
          </div>
          <div className="px-2">
            <div className="row p-2 align-items-center mb-4 py-0">
              <div className="col-md-3 px-1 mt-2 mt-md-0">
                <div className="event_card">
                  <div className="event_bg">
                    <h6>DevFest India</h6>
                  </div>
                  <div className="text-muted">
                    <p style={{ fontSize: "14px" }} className="p-2">
                      DevFest India is the largest annual developer’s fest
                      organized by Google Developer Groups across India. Join us
                      for 3 exciting days packed with learning, networking,
                      experimenting and swags for few winners
                    </p>
                    <div
                      style={{ fontSize: "16px" }}
                      className="mt-2 d-flex justify-content-around text-dark"
                    >
                      <p>
                        <MdOutlineEvent size={22} /> 20 Oct 2022
                      </p>
                      <p>
                        <BiTimeFive size={22} /> 09:00 A.M IST
                      </p>
                    </div>
                    <div className="text-center mt-2 pb-2">
                      <Button variant="outlined" color="primary">
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming_events">
          <div className="text-center">
            <h2
              style={{ display: "inline-block" }}
              className="display-6 fst-italic text-intro px-3 pb-3 pt-2 rounded"
            >
              Past Events
            </h2>
          </div>
          <div className="px-2">
            <div className="row p-2 align-items-center mb-4 py-0">
              <div className="col-md-3 px-1 mt-2 mt-md-0">
                <div className="event_card">
                  <div className="event_bg">
                    <h6>DevFest India</h6>
                  </div>
                  <div className="text-muted">
                    <p style={{ fontSize: "14px" }} className="p-2">
                      DevFest India is the largest annual developer’s fest
                      organized by Google Developer Groups across India. Join us
                      for 3 exciting days packed with learning, networking,
                      experimenting and swags for few winners
                    </p>
                    <div
                      style={{ fontSize: "16px" }}
                      className="mt-2 d-flex justify-content-around text-dark"
                    >
                      <p>
                        <MdOutlineEvent size={22} /> 20 Oct 2022
                      </p>
                      <p>
                        <BiTimeFive size={22} /> 09:00 A.M IST
                      </p>
                    </div>
                    <div className="text-center mt-2 pb-2">
                      <Button variant="outlined" color="primary">
                        See Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 px-1 mt-2 mt-md-0">
                <div className="event_card">
                  <div className="event_bg">
                    <h6>DevFest India</h6>
                  </div>
                  <div className="text-muted">
                    <p style={{ fontSize: "14px" }} className="p-2">
                      DevFest India is the largest annual developer’s fest
                      organized by Google Developer Groups across India. Join us
                      for 3 exciting days packed with learning, networking,
                      experimenting and swags for few winners
                    </p>
                    <div
                      style={{ fontSize: "16px" }}
                      className="mt-2 d-flex justify-content-around text-dark"
                    >
                      <p>
                        <MdOutlineEvent size={22} /> 20 Oct 2022
                      </p>
                      <p>
                        <BiTimeFive size={22} /> 09:00 A.M IST
                      </p>
                    </div>
                    <div className="text-center mt-2 pb-2">
                      <Button variant="outlined" color="primary">
                        See Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 px-1 mt-2 mt-md-0">
                <div className="event_card">
                  <div className="event_bg">
                    <h6>DevFest India</h6>
                  </div>
                  <div className="text-muted">
                    <p style={{ fontSize: "14px" }} className="p-2">
                      DevFest India is the largest annual developer’s fest
                      organized by Google Developer Groups across India. Join us
                      for 3 exciting days packed with learning, networking,
                      experimenting and swags for few winners
                    </p>
                    <div
                      style={{ fontSize: "16px" }}
                      className="mt-2 d-flex justify-content-around text-dark"
                    >
                      <p>
                        <MdOutlineEvent size={22} /> 20 Oct 2022
                      </p>
                      <p>
                        <BiTimeFive size={22} /> 09:00 A.M IST
                      </p>
                    </div>
                    <div className="text-center mt-2 pb-2">
                      <Button variant="outlined" color="primary">
                        See Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 px-1 mt-2 mt-md-0">
                <div className="event_card">
                  <div className="event_bg">
                    <h6>DevFest India</h6>
                  </div>
                  <div className="text-muted">
                    <p style={{ fontSize: "14px" }} className="p-2">
                      DevFest India is the largest annual developer’s fest
                      organized by Google Developer Groups across India. Join us
                      for 3 exciting days packed with learning, networking,
                      experimenting and swags for few winners
                    </p>
                    <div
                      style={{ fontSize: "16px" }}
                      className="mt-2 d-flex justify-content-around text-dark"
                    >
                      <p>
                        <MdOutlineEvent size={22} /> 20 Oct 2022
                      </p>
                      <p>
                        <BiTimeFive size={22} /> 09:00 A.M IST
                      </p>
                    </div>
                    <div className="text-center mt-2 pb-2">
                      <Button variant="outlined" color="primary">
                        See Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
