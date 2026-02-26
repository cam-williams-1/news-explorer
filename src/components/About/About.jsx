import "./About.css";
import avatar from "../../assets/author.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__avatar" src={avatar} alt="author image" />
      <div className="about__info">Info about author</div>
    </div>
  );
}

export default About;
