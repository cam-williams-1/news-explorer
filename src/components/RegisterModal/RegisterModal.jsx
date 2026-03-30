import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import closeBtn from "../../assets/close-btn.svg";

function RegisterModal({
  isOpen,
  closeActiveModal,
  onSubmit,
  onSwitchToLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  }

  function handleUsernameChange(e) {
    const value = e.target.value;
    setUsername(value);
    if (value.length < 8) {
      setUsernameError("Username must be at least 8 characters");
    } else {
      setUsernameError("");
    }
  }

  const isFormValid =
    validateEmail(email) &&
    password.length >= 8 &&
    username.length >= 8 &&
    !emailError &&
    !passwordError &&
    !usernameError;

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    }
    if (username.length < 8) {
      setUsernameError("Username must be at least 8 characters");
    }
    if (isFormValid) {
      onSubmit({ email, password, username });
    }
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      title="Sign Up"
      buttonText="Register"
      closeBtn={closeBtn}
      modalClassName="register-modal__content"
      isSubmitActive={isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && (
          <span className="modal__error" style={{ color: "red" }}>
            {emailError}
          </span>
        )}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength={8}
        />
        {passwordError && (
          <span className="modal__error" style={{ color: "red" }}>
            {passwordError}
          </span>
        )}
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        {usernameError && (
          <span className="modal__error" style={{ color: "red" }}>
            {usernameError}
          </span>
        )}
      </label>
      <button
        type="button"
        className="modal__switch-btn"
        style={{
          marginTop: 12,
          background: "none",
          border: "none",
          color: "#347EFF",
          cursor: "pointer",
          fontSize: 14,
        }}
        onClick={onSwitchToLogin}
      >
        or Sign In
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
