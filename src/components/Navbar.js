import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <nav>
        <div className="nav-wrapper  indigo accent-2 valign-wrapper">
          <img
            className="left circle responsive-img"
            src="img/mypic.jpg"
            style={{ width: "50px" }}
          />
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="waves-effect" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to="/Experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to="/Education">
                Education
              </Link>
            </li>
            <li>
              <Link className="waves-effect" to="/Projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <img
          className="left circle responsive-img"
          src="img/mypic.jpg"
          style={{ width: "50px" }}
        />
        <li>
          <Link className="waves-effect" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/Experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/Education">
            Education
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/Skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/Projects">
            Projects
          </Link>
        </li>
      </ul>
    </>
  );
}
