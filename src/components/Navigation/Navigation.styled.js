import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const NavMenu = styled.div`
  display: flex;
  gap: 26px;
`;

export const NavBtn = styled(NavLink)`
  position: relative;
  font-family: ${variables.fonts.regular};
  padding: 14px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: ${variables.animations.transition};
  color: ${variables.color.textMainPage};

  &:not(:first-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${variables.color.bgSecondary};
    border-radius: 50%;
    opacity: 0;
  }

  &.active:after {
    opacity: 1;
  }

  &:hover {
    background-color: ${variables.color.textMainPage};
    color: ${variables.color.accent};
  }
`;
