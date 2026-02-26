// Root Component of Application, responsible for rendering the main UI and managing state.

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  // State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  return (
    // Context for LoggedIn ...
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <About />
        <Footer />
      </div>
      {/* <RegisterModal />
      <LoginModal /> */}
    </div>
  );
}

export default App;
