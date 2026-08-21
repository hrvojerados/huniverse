import { Link } from "react-router-dom";

export default function Home() {
  // console.log(import.meta.env.VITE_ENV);
  return (
    <div className="home">
      <div className="home-title">
         <Link to="/posts" className="home-link">
           <div id="home-logo">H</div>
         </Link>
         <div id="home-wordmark">universe</div>
      </div>
    </div>
  );
}
