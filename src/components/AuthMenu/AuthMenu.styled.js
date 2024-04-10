import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  /* gap: 8px; */

  @media screen and (min-width: 768px) {
    width: 533px;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const Btn = styled.button`
  border: 1px solid ${variables.color.borderBtn};
  border-radius: 30px;
  padding: 14px;
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

  @media screen and (min-width: 768px) {
    padding: 14px 39px;
  }
`;

export const LoginBtn = styled(Btn)`
  background-color: transparent;
`;

export const RegistrationBtn = styled(Btn)`
  background-color: ${variables.color.accent};
`;
