import React from "react";
import "./SuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import closeBtn from "../../assets/close-btn.svg";

function SuccessModal({ isOpen, closeActiveModal, onSignIn }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      title="Registration Successfully Completed!"
      hideForm={true}
      closeBtn={closeBtn}
      modalClassName="success-modal__content"
    >
      <button className="success-modal__signin-btn" onClick={onSignIn}>
        Sign In
      </button>
    </ModalWithForm>
  );
}

export default SuccessModal;
