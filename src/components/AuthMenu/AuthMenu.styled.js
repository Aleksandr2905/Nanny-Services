import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const Btn = styled.button`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: all 0.3s;
  color: #fbfbfb;

  &:hover {
    background-color: #fbfbfb;
    color: var(--background-color);
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
  background-color: var(--background-color);
`;
