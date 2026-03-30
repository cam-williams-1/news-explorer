import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import closeBtn from "../../assets/close-btn.svg";

function LoginModal({
  isOpen,
  closeActiveModal,
  onSubmit,
  onSwitchToRegister,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateEmail(value) {
    // Simple email regex
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

  const isFormValid =
    validateEmail(email) &&
    password.length >= 8 &&
    !emailError &&
    !passwordError;

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    }
    if (isFormValid) {
      onSubmit({ email, password });
    }
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      title="Sign In"
      buttonText="Sign In"
      closeBtn={closeBtn}
      modalClassName="login-modal__content"
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
      <button
        type="button"
        className="modal__switch-btn"
        onClick={onSwitchToRegister}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
