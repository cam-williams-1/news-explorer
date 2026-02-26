import "./Main.css";
import About from "../About/About";
import Search from "../Search/Search";

function Main({}) {
  return (
    <main className="main">
      <h2 className="main__title">What's going on in the world?</h2>
      <p className="main__subtitle">
        Find the latest news on any topic and save them to your personal
        account.
      </p>
      <Search />
    </main>
  );
}

export default Main;
