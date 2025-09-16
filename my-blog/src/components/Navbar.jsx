import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Huniverse</Link>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}


