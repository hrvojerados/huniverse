import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="nav">
      <div id="homeLink">
        <Link to="/" className="navbarLink">
          <div id="navbarH">
            H
          </div>
        </Link>
        <div id="navbarUniverse">
          universe
        </div>
      </div>

      <div id="navRight">
        <Link to="/posts" className="navbarLink">
          <div id="navPosts">
            Posts
          </div>
        </Link>
        <Link to="/about" className="navbarLink">
          <div id="navAbout">
            About
          </div>
        </Link>
        <Link to="/contact" className="navbarLink">
          <div id="navContact">
            Contact
          </div>
        </Link>
      </div>
    </div>
    <Outlet/>
    </>
  );
}


