import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const Btn = styled.button`
  border: 1px solid ${variables.color.borderBtn};
  border-radius: 30px;
  padding: 14px 39px;
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: ${variables.animations.transition};
  color: ${variables.color.textMainPage};

  &:hover {
    background-color: ${variables.color.textMainPage};
    color: ${variables.color.accent};
  }

  /* &:focus {
   border: 1px solid rgba(251, 251, 251, 0.4);
   outline: none;
} */
`;

export const LoginBtn = styled(Btn)`
  background-color: transparent;
`;

export const RegistrationBtn = styled(Btn)`
  background-color: ${variables.color.accent};
`;
