import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 24px;
`;

export const WrappName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const IconUser = styled.svg`
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${variables.color.bgSecondary};

  & use {
    fill: ${variables.color.accent};
  }
`;

export const Name = styled.p`
  font-family: ${variables.fonts.medium};
  font-style: 18px;
  font-weight: 500;
  line-height: 1.11;
  letter-spacing: -0.01em;
  color: ${variables.color.textMainPage};
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
  background-color: ${variables.color.accent};
  color: ${variables.color.textMainPage};
`;
