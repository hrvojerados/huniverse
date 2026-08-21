
import Navbar from "../components/Navbar";


export default function About() {
  return (
    <>
    <Navbar/>
    <div className="page-container page-container-framed">
      <div className="page-frame">
        <h1 className="about-title">About Me</h1>

        <div className="about-grid">
          <div className="about-box about-text">
            <p>
              My name is Hrvoje Radoš and this is my blog. I am a second year
              master's student of computer science at the Faculty of Electrical
              Engineering and Computing at University of Zagreb. I have a lot of
              interests. Professionaly, I am interested in general ML research.
              Currently, I assist in the research group "TakeLab" which primarily
              deals with problems in NLP. I am mostly attracted to math-heavy
              topics. Right now, I am studying "Information Geometry". This is a
              field of machine learning that views probabilistic concepts from
              machine learning through the lens of differential geometry.
            </p>
            <p>
              Lifestyle wise, I have even more interests. I try to enjoy as many
              things in life because I believe that when some things aren't going
              our way, it's good to have some things that cheer us up. I am a big
              Formula 1 fan. I like to travel. I like to pursue physical activities.
              I love any form of volunteering that helps other people. Since I have
              always had the need to document some thoughts and share them with others,
              I plan to post a wide variety of posts here (hence the "universe" in the
              name) and I hope you'll enjoy reading them.
            </p>
          </div>

          <div className="about-box about-pictures">
            <img src="images/Lisabon.jpg" alt="Hrvoje in Lisbon" />
          </div>

          <div className="about-box about-links">
            <a href="https://github.com/hrvojerados">GitHub</a>
            <a href="https://www.linkedin.com/in/hrvoje-rado%C5%A1-8797a224a/?originalSubdomain=hr">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
