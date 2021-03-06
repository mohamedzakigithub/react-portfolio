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
            alt="mypic"
            style={{ width: "50px" }}
          />
          <Link to="#" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="waves-effect" to="/About">
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

      <ul className="sidenav indigo accent-2" id="mobile">
        <li>
          <Link className="waves-effect" to="/">
            <img
              className="circle responsive-img"
              src="img/mypic.jpg"
              alt="mypic"
              style={{ width: "50px" }}
            />
          </Link>
        </li>
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
