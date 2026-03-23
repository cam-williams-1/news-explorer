// Root Component of Application, responsible for rendering the main UI and managing state.

import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import Preloader from "../Preloader/Preloader";

function App() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState(""); // '' means no modal
  const [selectedCard, setSelectedCard] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);

  // Modal handlers
  const openRegisterModal = () => setActiveModal("register");
  const openLoginModal = () => setActiveModal("login");
  const closeActiveModal = () => setActiveModal("");

  const isSavedNews = location.pathname === "/saved-news";

  const handleSearch = () => {
    setIsPreloaderVisible(true);
    // Simulate search completion
    setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 2000);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          isSavedNews={isSavedNews}
          currentUser={currentUser}
          onSignIn={openLoginModal}
          onSignOut={() => setIsLoggedIn(false)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  handleSearch={handleSearch}
                  isPreloaderVisible={isPreloaderVisible}
                />
                {isPreloaderVisible && <Preloader />}
                <About />
              </>
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>

        <Footer />
      </div>
      {activeModal === "register" && (
        <RegisterModal
          isOpen={activeModal === "register"}
          closeActiveModal={closeActiveModal}
          onSubmit={() => {
            closeActiveModal();
            setTimeout(() => setIsSuccessModalOpen(true), 200);
          }}
          onSwitchToLogin={() => {
            closeActiveModal();
            setTimeout(() => setActiveModal("login"), 0);
          }}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          isOpen={activeModal === "login"}
          closeActiveModal={closeActiveModal}
          onSubmit={() => {}}
          onSwitchToRegister={() => {
            closeActiveModal();
            setTimeout(() => setActiveModal("register"), 0);
          }}
        />
      )}
      {isSuccessModalOpen && (
        <SuccessModal
          isOpen={isSuccessModalOpen}
          closeActiveModal={() => setIsSuccessModalOpen(false)}
          onSignIn={() => {
            setIsSuccessModalOpen(false);
            setTimeout(() => setActiveModal("login"), 200);
          }}
        />
      )}
    </div>
  );
}

export default App;
