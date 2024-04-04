import styled from "styled-components";
import { variables } from "../../../stylesheet/variables";

export const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;

  &:hover {
    transform: rotate(45deg);
  }

  & svg {
    fill: none;
    stroke-width: 1.5px;
    stroke: ${variables.color.textPrimary};
  }
`;
