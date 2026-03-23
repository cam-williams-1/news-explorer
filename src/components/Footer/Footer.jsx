import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p className="footer__text_copyright">
          &copy; 2024 Supersite, Powered by News API
        </p>
        <div className="footer__text_icons">
          <p className="footer__text_icons-home">Home</p>
          <p className="footer__text_icons-tripleten">TripleTen</p>
          <img
            className="footer__text_icons-github"
            src={githubIcon}
            alt="Github"
          />
          <img
            className="footer__text_icons-linkedin"
            src={linkedinIcon}
            alt="LinkedIN"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
