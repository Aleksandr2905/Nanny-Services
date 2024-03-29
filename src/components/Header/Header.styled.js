import { NavLink } from "react-router-dom";
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

export const NavMenu = styled.div`
  display: flex;
  gap: 40px;
`;

export const NavBtn = styled(NavLink)`
  position: relative;
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${variables.color.textMainPage};

  &:after {
    content: "";
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${variables.color.bgSecondary};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.active:after {
    opacity: 1;
  }
`;
