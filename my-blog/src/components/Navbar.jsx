import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="navbar">
      <div id="navbar-brand">
        <Link to="/" className="navbar-link">
          <div id="navbar-logo">
            H
          </div>
        </Link>
        <div id="navbar-wordmark">
          universe
        </div>
      </div>

      <div id="navbar-menu">
        <Link to="/posts" className="navbar-link">
          <div id="nav-posts">
            Posts
          </div>
        </Link>
        <Link to="/about" className="navbar-link">
          <div id="nav-about">
            About
          </div>
        </Link>
        <Link to="/contact" className="navbar-link">
          <div id="nav-contact">
            Contact
          </div>
        </Link>
      </div>
    </div>
    <Outlet/>
    </>
  );
}


