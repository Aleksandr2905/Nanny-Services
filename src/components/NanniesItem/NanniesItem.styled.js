import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  gap: 24px;
  max-width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background: ${variables.color.bgSecondary};

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  padding: 12px;
  border-radius: 30px;
  position: relative;
  border: 2px solid ${variables.color.accentLight};
`;

export const IconOnline = styled.svg`
  position: absolute;
  top: 9px;
  right: 14px;
`;

export const Img = styled.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`;

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UpperBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  color: ${variables.color.titleCard};
`;

export const Name = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  color: ${variables.color.textPrimary};
`;

export const UpperRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    align-items: center;
    margin-top: 0;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 8px;
`;

export const IconLine = styled.svg`
  stroke-width: 1px;
  stroke: rgba(17, 16, 28, 0.2);
`;

export const TextRight = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  color: ${variables.color.textPrimary};

  & span {
    color: ${variables.color.green};
  }
`;

export const IconMap = styled.svg`
  fill: ${variables.color.bgSecondary};
  stroke: ${variables.color.textPrimary};
`;

export const IconStar = styled.svg`
  fill: ${variables.color.iconStar};
`;

export const BtnHeart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 0;
  width: 24px;
  height: 24px;
  margin-left: 40px;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    fill: none;
    stroke: ${variables.color.textPrimary};
  }

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
  }
`;

export const DescribeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const DescribeItem = styled.li`
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${variables.color.bgPrimary};
  color: ${variables.color.titleCard};

  & span {
    text-decoration-skip-ink: none;
    color: ${variables.color.textPrimary};
  }
`;

export const Age = styled.span`
  text-decoration: underline;
`;

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const About = styled.p`
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.color.textSecondary};
`;

export const BtnReadMore = styled.button`
  display: block;
  margin-top: 14px;
  margin-right: auto;
  padding: 0;
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  outline: none;
  border: none;
  background-color: transparent;
  transition: ${variables.animations.transition};
  color: ${variables.color.textPrimary};

  &:hover {
    color: ${variables.color.accent};
  }
`;
