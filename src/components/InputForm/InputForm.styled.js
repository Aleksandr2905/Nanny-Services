import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${variables.color.borderInput};
  border-radius: 12px;
  padding: 16px 18px;
  height: 52px;

  &::placeholder {
    font-family: ${variables.fonts.regular};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: ${variables.color.textPrimary};
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px ${variables.color.borderInput};
  }

  &:focus {
    outline: none;
    border: 1px solid ${variables.color.textSecondary};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  font-family: ${variables.fonts.medium};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  top: 100%;
  left: 18px;
  color: ${variables.color.accent};
`;

export const Eyes = styled.svg`
  position: absolute;
  right: 18px;
  top: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  & use {
    stroke: ${variables.color.textPrimary};
    fill: transparent;
  }
`;
