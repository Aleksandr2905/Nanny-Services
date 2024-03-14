import styled from "styled-components";

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
  background-color: #fbfbfb;

  & use {
    fill: var(--background-color);
  }
`;

export const Name = styled.p`
  font-style: 18px;
  font-weight: 500;
  line-height: 1.11;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;

export const Btn = styled.button`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  background-color: var(--background-color);
  color: #fbfbfb;
`;
