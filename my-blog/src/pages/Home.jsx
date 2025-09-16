import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="home">
      <div class="HomeTitle">
         <div id="H">H</div>
         <div id="universe">universe</div>
      </div>
      <div class="about">
         <h2>About me and this page</h2>
      </div>
      <div class="about">
         <Link to="/posts">
            Click here to view my blog posts         
         </Link>
      </div>
    </div>
  );
}
