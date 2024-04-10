import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  z-index: 9;
  margin-top: ${(props) => (props.$backgroundColor ? "0" : "32px")};
  position: absolute;
  left: 0;
  padding: ${(props) => (props.$backgroundColor ? "0 32px" : "0 48px")};
  width: 100vw;
  border-bottom: 1px solid ${variables.color.borderBtn};
  background-color: ${(props) =>
    props.$backgroundColor ? `${variables.color.accent}` : "transparent"};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px auto;
  max-width: 1184px;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 88px;
    margin: auto;
  }
`;

export const Logo = styled.div`
  font-family: ${variables.fonts.medium};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${variables.color.textMainPage};
`;
