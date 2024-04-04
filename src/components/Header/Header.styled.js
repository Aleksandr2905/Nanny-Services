import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  z-index: 9;
  margin-top: ${(props) => (props.$backgroundColor ? "0" : "32px")};
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 0 128px;
  width: 100vw;
  height: 88px;
  border-bottom: 1px solid ${variables.color.borderBtn};
  background-color: ${(props) =>
    props.$backgroundColor ? `${variables.color.accent}` : "transparent"};
`;

export const Logo = styled.div`
  font-family: ${variables.fonts.medium};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${variables.color.textMainPage};
`;
