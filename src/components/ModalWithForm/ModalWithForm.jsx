import React from "react";
import "./ModalWithForm.css";
import closeBtn from "../../assets/close-btn.svg";

function ModalWithForm({
  isOpen,
  closeActiveModal,
  onSubmit,
  title,
  buttonText,
  closeBtn,
  children,
  modalClassName = "",
  isSubmitActive = false,
  hideForm = false,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className={`modal__content ${modalClassName}`}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-btn"
        >
          <img src={closeBtn} alt="close" />
        </button>
        {hideForm ? (
          <div className="modal__form">{children}</div>
        ) : (
          <form onSubmit={onSubmit} action="" className="modal__form">
            {children}
            <button
              type="submit"
              className="modal__submit-btn"
              style={isSubmitActive ? { color: "#fff", backgroundColor: "#2F71E5" } : {}}
              disabled={!isSubmitActive}
            >
              {buttonText}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ModalWithForm;
