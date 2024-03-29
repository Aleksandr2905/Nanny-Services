import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  padding: 64px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: ${variables.fonts.medium};
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${variables.color.textPrimary};
`;

export const Text = styled.p`
  max-width: 438px;
  margin-bottom: 40px;
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.color.textSecondary};
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputWrap = styled.div`
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

export const ErrorText = styled.p`
  position: absolute;
  font-family: ${variables.fonts.medium};
  font-size: 10px;
  font-weight: 700;
  line-height: 1.25;
  top: 100%;
  left: 18px;
  color: ${variables.color.accent};
`;

export const Btn = styled.button`
  border-radius: 30px;
  padding: 16px;
  margin-top: 22px;
  height: 52px;
  border: none;
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${variables.color.textMainPage};
  background-color: ${variables.color.accent};

  &:hover {
    box-shadow: 0px 4px 14px 0px ${variables.color.textSecondary};
    color: ${variables.color.accent};
    background-color: ${variables.color.textMainPage};
  }
`;
