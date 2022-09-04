import Link from "./Links";
import React from "react";




const whoami = (
  <div
    style={{
      paddingLeft: "5vw",
      paddingRight: "5vw",
    }}
  >
    <div
      style={{
        textAlign: "justify",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Hi!</h2>
      I'm <span style={{ fontWeight: "800" }}>Ahmad</span>! I'm a new graduate from @{" "}
      <Link target="_blank" href="https://www.csie.ntu.edu.tw/">
        Lassonde School of Engineering- York University
      </Link>
      . I have a strong interest in full-stack development and application security. My go-to front-end
      web development framework is
      <Link target="_blank" href="https://reactjs.org/">ReactJS</Link>
        
      . I am currently a Software Engineer @ <Link target="_blank" href="https://www.hubspot.com/">HubSpot</Link>
      <br />
      <br />
      Find me on:{" "}
      <Link
        style={{ marginRight: "10px" }}
        target="_blank"
        href="https://github.com/afaruqii"
      >
        github
      </Link>
      |
      <Link
        style={{ marginLeft: "10px", marginRight: "10px" }}
        target="_blank"
        href="https://www.linkedin.com/in/ahmad-faruqi"
      >
        linkedIn
      </Link>
      |
      <Link
        style={{ marginLeft: "10px" }}
        target="_blank"
        href="mailto: faruqi.ahmad14@gmail.com"
      >
        email
      </Link>
    </div>
  </div>
);

export default whoami;