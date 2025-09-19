import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div class="nav">
      <div id="homeLink">
        <Link to="/" class="navbarLink">
          <div id="navbarH">
            H
          </div>
        </Link>
        <div id="navbarUniverse">
          universe
        </div>
      </div>

      <div id="navRight">
        <Link to="/posts" class="navbarLink">
          <div id="navPosts">
            Posts
          </div>
        </Link>
        <Link to="/about" class="navbarLink">
          <div id="navAbout">
            About
          </div>
        </Link>
        <Link to="/contact" class="navbarLink">
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


