import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p className="footer__text_copyright">
          &copy; 2024 Supersite, Powered by News API
        </p>
        <p className="footer__text_icons">
          <p className="footer__text_icons-home">Home</p>
          <p className="footer__text_icons-tripleten">TripleTen</p>
          <p className="footer__text_icons-github">Github</p>
          <p className="footer__text_icons-linkedin">LinkedIN</p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
