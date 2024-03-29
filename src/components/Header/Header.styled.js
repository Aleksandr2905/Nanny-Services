import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 96px;
  width: 100%;
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
