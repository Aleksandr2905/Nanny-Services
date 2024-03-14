import { useEffect } from "react";
import ReactDOM from "react-dom";
import sprite from "../../assets/icons/sprite.svg";
import { Backdrop, BtnCloseModal, Container } from "./Modal.styled";

export const Modal = ({ isModalOpen, onCloseModal, children }) => {
  const modalPortal = document.getElementById("modal");

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (isModalOpen && event.key === "Escape") {
        onCloseModal();
      }
    };
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, onCloseModal]);

  if (!isModalOpen || modalPortal === null) {
    return null;
  }
  return ReactDOM.createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Container>
        <BtnCloseModal type="button" onClick={onCloseModal}>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-x`} />
          </svg>
        </BtnCloseModal>
        {children}
      </Container>
    </Backdrop>,
    modalPortal
  );
};
