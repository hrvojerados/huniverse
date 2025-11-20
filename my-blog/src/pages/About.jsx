
import Navbar from "../components/Navbar";


export default function About() {
  return (
    <>
      <Navbar/>
    <div className="pageContainer">
      <h1>About Me</h1>
      <div className="pageContent">
          Hi my name is Hrvoje Radoš and this
          is my website/blog.
      </div>
      <div className="pageContent">
          I plan to use this 
          website primarily to share the projects 
          on which I have worked on or on which I'm 
          working on. But I also want people 
          to get to know me through my own space on 
          the Interneet.
      </div>
      <div className="pageContent">
          I plan to post a wide variety of posts here
          (hence the "universe" in the name) and I 
          hope you'll enjoy reading them.
      </div>
      <h2>GitHub:</h2>
      <div>
          <a href="https://github.com/hrvojerados">GitHub_hrvojerados</a>
      </div>
      <h2>LinkedIn:</h2>
      <div>
          <a href="https://www.linkedin.com/in/hrvoje-rado%C5%A1-8797a224a/?originalSubdomain=hr">LinkedIn</a>
      </div>

    </div>
    </>
  );
}
