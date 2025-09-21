import { Link } from "react-router-dom";

export default function Home() {
  // console.log(import.meta.env.VITE_ENV);
  return (
    <div className="home">
      <div className="HomeTitle">
         <Link to="/posts" className="link">
           <div id="H">H</div>
         </Link>
         <div id="universe">universe</div>
      </div>
    </div>
  );
}
