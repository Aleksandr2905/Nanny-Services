import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 64px;
`;

export const Button = styled.button`
  display: flex;
  border-radius: 30px;
  padding: 14px 40px;
  outline: none;
  border: none;
  margin: 0 auto 100px;
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: ${variables.animations.transition};
  background: ${variables.color.accent};
  color: ${variables.color.textMainPage};

  &:hover {
    box-shadow: 0px 4px 14px 0px ${variables.color.textSecondary};
    color: ${variables.color.accent};
    background-color: ${variables.color.textMainPage};
  }
`;
