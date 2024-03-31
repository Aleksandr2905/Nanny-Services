import { useState } from "react";
import { Modal } from "../Modal/Modal";
import * as s from "./AuthMenu.styled";
import { Registration } from "../Registration/Registration";
import { Login } from "../Login/Login";
import { Navigation } from "../Navigation/Navigation";

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
    <s.Wrapper>
      <Navigation />
      <s.BtnWrap>
        <s.LoginBtn type="button" onClick={openModalLogIn}>
          Log In
        </s.LoginBtn>
        <s.RegistrationBtn type="button" onClick={openModalRegister}>
          Registration
        </s.RegistrationBtn>
      </s.BtnWrap>

      <Modal
        onCloseModal={closeModalRegister}
        isModalOpen={modalIsOpenRegister}
      >
        <Registration onCloseModal={closeModalRegister} />
      </Modal>
      <Modal onCloseModal={closeModalLogIn} isModalOpen={modalIsOpenLogIn}>
        <Login onCloseModal={closeModalLogIn} />
      </Modal>
    </s.Wrapper>
  );
};
