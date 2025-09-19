import { Link } from "react-router-dom";
// import { useState } from "react";
export default function Home() {
  // const [showAbout, setShow] = useState(false);

  return (
    <div class="home">
      <div class="HomeTitle">
         <div id="H">H</div>
         <div id="universe">universe</div>
      </div>
      <div class="about">
        <h2>About me and this page</h2>
        <p>
          Hi my name is Hrvoje Radoš and this
          is my website/blog. I plan to use this 
          website primarily to share the projects 
          on which I have worked on or on which I'm 
          working on. But I also want people 
          to get to know me through my own space on 
          the Internet. As you can probably guess now 
          I'm not really a fan of social media.
          I plan to post a wide variety of posts here
          (hence the "universe" in the name) and I 
          hope you'll enjoy reading them.

        </p> 
        <Link to="/posts">
          Click here to view my blog posts         
        </Link>
      </div>

    </div>
  );
}
