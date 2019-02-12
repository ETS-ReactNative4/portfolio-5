import React, { Component } from "react";
import github from "../Home/github.png";
import linkedin from "../Home/linkedin.png";
import "./footer.css";

export default function Footer(props) {
  return (
    <footer>
      <div id="footer-container">
        <div id="left-container">Let's Connect</div>
        <div id="right-container">
          <form action="https://www.linkedin.com/in/russellmemory/">
            <button>
              <img src={linkedin} />
            </button>
          </form>

          <form action="https://github.com/rgmemory">
            <button>
              <img src={github} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

{/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/rgmemory">
  <img src={github} />
</a>; */}
