import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Backdrop = styled.div`
  background-color: ${variables.color.bgBackdrop};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  overflow-y: auto;
`;

export const Container = styled.div`
  position: absolute;
  background-color: ${variables.color.bgSecondary};
  border-radius: 30px;
  z-index: 100;
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  outline: none;
  overflow: hidden;
  padding: 0;

  & svg {
    stroke: ${variables.color.textPrimary};

    &:hover {
      stroke: ${variables.color.accent};
    }
  }
`;
