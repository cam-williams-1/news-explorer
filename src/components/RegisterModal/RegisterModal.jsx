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

  const isFormValid =
    email.trim() !== "" && password.trim() !== "" && username.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();
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
          onChange={(e) => setEmail(e.target.value)}
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
      <label className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
