import "./About.css";
import avatar from "../../assets/author.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__avatar" src={avatar} alt="author image" />
      <div className="about__text">
        <div className="about__text_author">About The Author</div>
        <div className="about__text_bio">
          Hi! My name is Cam and I am a software engineer. This is my final
          project from TripleTen where I have learned the crucial skills
          necessary to do what I love - build software that serves people!
        </div>
      </div>
    </div>
  );
}

export default About;
