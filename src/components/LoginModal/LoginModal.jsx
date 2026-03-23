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

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();
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
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={8}
        />
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
