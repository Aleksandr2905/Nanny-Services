import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { LoginBtn, RegistrationBtn, Wrapper } from "./AuthMenu.styled";
import { Registration } from "../Registration/Registration";
import { Login } from "../Login/Login";

export const AuthMenu = () => {
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogIn, setModalIsOpenLogIn] = useState(false);

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };

  const openModalLogIn = () => {
    setModalIsOpenLogIn(true);
  };

  const closeModalLogIn = () => {
    setModalIsOpenLogIn(false);
  };

  return (
    <Wrapper>
      <LoginBtn type="button" onClick={openModalLogIn}>
        Log In
      </LoginBtn>
      <RegistrationBtn type="button" onClick={openModalRegister}>
        Registration
      </RegistrationBtn>
      <Modal
        onCloseModal={closeModalRegister}
        isModalOpen={modalIsOpenRegister}
      >
        <Registration onCloseModal={closeModalRegister} />
      </Modal>
      <Modal onCloseModal={closeModalLogIn} isModalOpen={modalIsOpenLogIn}>
        <Login />
      </Modal>
    </Wrapper>
  );
};
