import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle-preloader"></div>
      <p className="preloader__txt">Searching for news...</p>
    </div>
  );
}

export default Preloader;
