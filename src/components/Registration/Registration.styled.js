import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 64px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #11101c;
`;

export const Text = styled.p`
  max-width: 438px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: rgba(17, 16, 28, 0.5);
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
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  height: 52px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: #11101c;
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(17, 16, 28, 0.1);
  }

  &:focus {
    outline: none;
    border: 1px solid rgba(17, 16, 28, 0.5);
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
    stroke: #11101c;
    fill: transparent;
  }
`; 

export const ErrorText = styled.p`
  position: absolute;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.25;
  top: 100%;
  left: 18px;
  color: var(--background-color)
`;

export const Btn = styled.button`
  border-radius: 30px;
  padding: 16px;
  margin-top: 22px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  background-color: var(--background-color);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(17, 16, 28, 0.5);
    color: var(--background-color);
    background-color: #fbfbfb;
  }
`;