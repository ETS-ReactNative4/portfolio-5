import React, { Component } from "react";
import github from "../Home/github.png";
import linkedin from "../Home/linkedin.png";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer>
      <div id="footer-container">
        <div id="left-container">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Let's Connect{" "}
          </Link>
        </div>

        <div id="right-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/russellmemory/"
          >
            <img src={linkedin} alt="" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rgmemory"
          >
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
