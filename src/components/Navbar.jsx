import { useState } from "react";

const Navbar = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleSidenav = () => {
    const sidenav = document.querySelector(".sidenav");
    const removeSidenav = () => {
      sidenav.classList.remove("show");
      const overlay = document.querySelector(".overlay");
      document.body.removeChild(overlay);
      setVisibility(false);
    };
    const openSidenav = () => {
      sidenav.classList.add("show");
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);
      overlay.addEventListener("click", removeSidenav);
      setVisibility(true);
    };
    if (visibility) {
      removeSidenav();
    } else {
      openSidenav();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="img/pace_logo.png" alt="Pace" />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              School of English
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pace Commerce Academy
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pace IIT & Medical
            </a>
          </li>
        </ul>
        <div className="hamburger_menu" onClick={toggleSidenav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div className="sidenav">
        <ul className="sidenav-list">
          <a
            href="#"
            className="sidenav-link close-nav"
            onClick={toggleSidenav}
          >
            <li className="sidenav-item">
              <i className="far fa-times-circle"></i> Close Menu
            </li>
          </a>
          <a href="#" className="sidenav-link">
            <li className="sidenav-item">Home</li>
          </a>
          <a href="#" className="sidenav-link">
            <li className="sidenav-item">Courses</li>
          </a>
          <a href="#" className="sidenav-link">
            <li className="sidenav-item">School of English</li>
          </a>
          <a href="#" className="sidenav-link">
            <li className="sidenav-item">Pace Commerce Academy</li>
          </a>
          <a href="#" className="sidenav-link">
            <li className="sidenav-item">Pace IIT & Medical</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
