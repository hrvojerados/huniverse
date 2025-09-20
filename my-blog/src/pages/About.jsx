
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
          the Internet.
      </div>
      <div className="pageContent">
          I plan to post a wide variety of posts here
          (hence the "universe" in the name) and I 
          hope you'll enjoy reading them.
      </div>
    </div>
    </>
  );
}
