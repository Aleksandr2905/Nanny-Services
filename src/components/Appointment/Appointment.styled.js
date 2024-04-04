import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  padding: 64px;
`;

export const Title = styled.h2`
  max-width: 472px;
  margin-bottom: 20px;
  font-family: ${variables.fonts.medium};
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
  color: ${variables.color.textPrimary};
`;

export const Text = styled.p`
  max-width: 472px;
  margin-bottom: 40px;
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.color.textSecondary};
`;

export const NannyWrap = styled.div`
  display: flex;
  gap: 14px;
`;

export const Img = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`;

export const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;
  gap: 4px;
`;

export const Nanny = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  color: ${variables.color.titleCard};
`;

export const NameNanny = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${variables.color.textPrimary};
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  & div {
    min-width: calc(50% - 4px);
    flex-grow: 1;
  }
`;

export const WrapperTextarea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Textarea = styled.textarea`
  padding: 16px 18px;
  height: 116px;
  border-radius: 12px;
  border: 1px solid ${variables.color.borderInput};
  resize: none;
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.color.textPrimary};

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

export const Btn = styled.button`
  border-radius: 30px;
  padding: 16px;
  margin-top: 22px;
  height: 52px;
  outline: none;
  border: none;
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: ${variables.animations.transition};
  color: ${variables.color.textMainPage};
  background-color: ${variables.color.accent};

  &:hover {
    box-shadow: 0px 4px 14px 0px ${variables.color.textSecondary};
    color: ${variables.color.accent};
    background-color: ${variables.color.textMainPage};
  }
`;
