import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 152px 0 32px 128px;
`;

export const Title = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${variables.color.titleCard};
`;
